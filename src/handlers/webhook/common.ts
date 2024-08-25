import {Clients} from "../../clients";
import {TextMessage} from "@line/bot-sdk";

export const handleNotRegistered = async (
    clients: Clients,
    replyToken: string
) => {
    const message: TextMessage = {
        type: "text",
        text: "登録が完了していません",
    }
    await clients.messaging.replyMessage({replyToken: replyToken, messages: [message]});
}