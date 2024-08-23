import {messagingApi, WebhookEvent} from "@line/bot-sdk";
import {Clients} from "../../clients";

export const handleUserRegister = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | undefined> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    let message: string;
    try {
        const user = await clients.messaging.getProfile(userId);
        const query = await clients.graphql.AddUser({"name": user.displayName, "uid": userId});
        if (query.insert_users) {
            message = `登録が完了しました！\n${user.displayName}さん、こんにちは！`;
        } else {
            message = "登録に失敗しました";
        }
    } catch (e) {
        message = "既に登録されています";
    }
    await clients.messaging.replyMessage({
        replyToken: replyToken,
        messages: [{type: "text", text: message}],
    });
}

export const handleUserDelete = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | undefined> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    let message: string;
    try {
        const query = await clients.graphql.DeleteUser({"uid": userId});
        if (query.delete_users_by_pk) {
            message = `登録解除が完了しました`;
        } else {
            message = "登録解除に失敗しました";
        }
    } catch (e) {
        message = "登録されていません";
    }
    await clients.messaging.replyMessage({
        replyToken: replyToken,
        messages: [{type: "text", text: message}],
    });
}