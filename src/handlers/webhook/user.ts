import {messagingApi, WebhookEvent} from "@line/bot-sdk";
import {Clients} from "../../clients";
import {richmenus} from "../../utils";

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
        const {insert_users_one: addedUser} = await clients.graphql.AddUser({uid: userId});
        if (addedUser) {
            await clients.messaging.linkRichMenuIdToUser(userId, richmenus.diary);
            message = `登録が完了しました!${user.displayName}さん、こんにちは！`;
        } else {
            message = "登録に失敗しました";
        }
    } catch (e) {
        await clients.messaging.linkRichMenuIdToUser(userId, richmenus.diary);
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
        const {delete_users} = await clients.graphql.DeleteUser({uid: userId});
        if (delete_users?.affected_rows === 1) message = "登録解除が完了しました";
        else message = "登録解除に失敗しました";
    } catch (e) {
        message = "登録されていません";
    }
    await clients.messaging.linkRichMenuIdToUser(userId, richmenus.default);
    await clients.messaging.replyMessage({
        replyToken: replyToken,
        messages: [{type: "text", text: message}],
    });
}