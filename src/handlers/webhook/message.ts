import {WebhookEvent} from "@line/bot-sdk";
import {Clients} from "../../clients";
import {DateTime} from "luxon";
import {handleNotRegistered, WebhookCommand} from "./";

// type Sentiment = {
//     documentSentiment: {
//         score: number;
//         magnitude: number;
//     }
// }

type Sentiment = {
    score: number;
    magnitude: number;
}

export const handleMessage = async (
    clients: Clients,
    event: WebhookEvent
) => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}, message: {text}} = event;
    if (!replyToken || !userId) return;

    const date = DateTime.local();
    const {users, question_sessions} =
        await clients.graphql.GetUserSession({uid: userId, date: date.toISODate()});

    if (users.length === 0) return await handleNotRegistered(clients, replyToken);
    else if (question_sessions.length !== 0) return await handleAnsweringMessage(clients, replyToken, userId, date, text);
    else return await handleMessageWithSentiment(clients, replyToken, userId, text);
}

const handleAnsweringMessage = async (
    clients: Clients,
    replyToken: string,
    userId: string,
    date: DateTime,
    text: string
) => {
    await clients.graphql.UpdateAnswerToSession({uid: userId, date: date.toISODate(), answer: text});
    await clients.messaging.replyMessage({
        replyToken: replyToken,
        messages: [
            {
                type: "text",
                text: "回答を保存してもよろしいですか？",
                quickReply: {
                    items: [
                        {
                            type: "action",
                            action: {
                                type: "message",
                                label: "はい",
                                text: `:${WebhookCommand.AnswerSave}`,
                            },
                        },
                        {
                            type: "action",
                            action: {
                                type: "message",
                                label: "いいえ",
                                text: `:${WebhookCommand.AnswerCancel}`,
                            },
                        },
                    ]
                }
            }
        ]
    });
}

const handleMessageWithSentiment = async (
    clients: Clients,
    replyToken: string,
    userId: string,
    text: string
) => {
    await clients.messaging.showLoadingAnimation({chatId: userId, loadingSeconds: 5});
    // const sentiment = await clients.language.analyzeSentiment(text);
    const chatCompletion = await clients.openai.beta.chat.completions.parse({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    "You are an assistant that analyzes the sentiment of the message." +
                    "Please provide the JSON object with score and magnitude as keys",
            },
            {role: "user", content: text},
        ],
        response_format: {
            // json_schema: {
            //     name: "AnalyzeSentimentResponse",
            //     schema: {
            //         type: "object",
            //         properties: {
            //             documentSentiment: {
            //                 type: "object",
            //                 properties: {
            //                     score: {type: "number"},
            //                 },
            //             },
            //         },
            //     }
            // },
            // type: "json_schema",
            type: "json_object",
        },
    });
    // const sentiment = chatCompletion.choices[0].message.parsed as unknown as Sentiment;
    const jsonString = chatCompletion.choices[0].message.content;
    let message: string;
    if (!jsonString) {
        message = "感情分析に失敗しました";
    } else {
        const sentiment = JSON.parse(jsonString) as unknown as Sentiment;
        // const positive = sentiment.documentSentiment?.score > 0.4 ? 1 : 0;
        // const negative = sentiment.documentSentiment?.score < -0.4 ? 1 : 0;
        const positive = sentiment.score > 0.4 ? 1 : 0;
        const negative = sentiment.score < -0.4 ? 1 : 0;
        await clients.graphql.AddMessage({uid: userId, date: DateTime.local().toISODate(), text, positive, negative});

        // const message: TextMessage = {
        //     type: "text",
        //     text: positive > negative
        //         ? `ポジティブなメッセージを受け取りました: ${sentiment.documentSentiment?.score}`
        //         : positive === negative
        //             ? `ニュートラルなメッセージを受け取りました: ${sentiment.documentSentiment?.score}`
        //             : `ネガティブなメッセージを受け取りました: ${sentiment.documentSentiment?.score}`,
        // };
        message = positive > negative
            ? `ポジティブなメッセージを受け取りました: ${sentiment.score}`
            : positive === negative
                ? `ニュートラルなメッセージを受け取りました: ${sentiment.score}`
                : `ネガティブなメッセージを受け取りました: ${sentiment.score}`;
    }
    await clients.messaging.replyMessage({replyToken: replyToken, messages: [{type: "text", text: message}]});
}