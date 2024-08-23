import {messagingApi, TextMessage, WebhookEvent} from "@line/bot-sdk";
import {Clients} from "../../clients";

export const handleMessage = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | undefined> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}, message: {text}} = event;
    if (!replyToken || !userId) return;

    const query = await clients.graphql.GetUser({"uid": userId});
    if (query.users.length === 0) {
        const message: TextMessage = {
            type: "text",
            text: "登録が完了していません",
        }
        await clients.messaging.replyMessage({replyToken: replyToken, messages: [message]});
        return;
    }

    await clients.messaging.showLoadingAnimation({chatId: userId, loadingSeconds: 5});
    const sentiment = await clients.language.analyzeSentiment(text);
    const positive = sentiment.documentSentiment?.score > 0 ? 1 : 0;
    const negative = sentiment.documentSentiment?.score < 0 ? 1 : 0;
    await clients.graphql.AddMessage({uid: userId, text, positive, negative});

    const message: TextMessage = {
        type: "text",
        text: positive > negative
            ? "ポジティブなメッセージを受け取りました"
            : positive === negative
                ? "ニュートラルなメッセージを受け取りました"
                : "ネガティブなメッセージを受け取りました",
    };
    await clients.messaging.replyMessage({replyToken: replyToken, messages: [message]});
}