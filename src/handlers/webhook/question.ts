import {Clients} from "../../clients";
import {messagingApi, WebhookEvent} from "@line/bot-sdk";
import {generateQuestionToday} from "../../utils";
import {DateTime} from "luxon";

export const handleQuestionToday = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | void> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    return generateQuestionToday({
        clients,
        uid: userId,
        date: DateTime.local(),
        handlers: {
            ok: async (question) => {
                await clients.messaging.replyMessage({
                    replyToken,
                    messages: [
                        {type: "text", text: "質問を生成しました"},
                        {type: "text", text: question},
                        {type: "text", text: "続けて回答してください"},
                    ],
                });
            },
            noDiary: async () => {
                await clients.messaging.replyMessage({
                    replyToken,
                    messages: [{type: "text", text: "日記がありません"}],
                });
            },
            started: async () => {
                await clients.messaging.replyMessage({
                    replyToken,
                    messages: [{type: "text", text: "質問を生成中です"}],
                });
                await clients.messaging.showLoadingAnimation({chatId: userId, loadingSeconds: 10});
            },
            failedToGenerate: async (error) => {
                await clients.messaging.replyMessage({
                    replyToken,
                    messages: [{type: "text", text: "質問の生成に失敗しました"}],
                });
                throw error;
            },
            alreadyGenerated: async (question, answer) => {
                if (answer) {
                    await clients.messaging.replyMessage({
                        replyToken,
                        messages: [
                            {type: "text", text: "既に回答が保存されています"},
                            {type: "text", text: question},
                            {type: "text", text: answer},
                        ],
                    });
                } else {
                    await clients.graphql.AddSession({uid: userId, date: DateTime.local().toISODate(), question});
                    await clients.messaging.replyMessage({
                        replyToken,
                        messages: [
                            {type: "text", text: "既に質問が生成されています"},
                            {type: "text", text: question},
                            {type: "text", text: "続けて回答してください"},
                        ],
                    });
                }
            },
        }
    });
}
