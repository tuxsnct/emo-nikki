import {Clients} from "../../clients";
import {messagingApi, WebhookEvent} from "@line/bot-sdk";
import {generateDiary} from "../../utils";

export const handleDiaryToday = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | void> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    await clients.messaging.replyMessage({
        replyToken,
        messages: [{type: "text", text: "日記を生成中です"}],
    });
    await clients.messaging.showLoadingAnimation({chatId: userId, loadingSeconds: 10});

    return await generateDiary<Promise<messagingApi.ReplyMessageResponse | void>>({
        clients,
        uid: userId,
        date: new Date(),
        handlers: {
            ok: async (message) => {
                await clients.messaging.pushMessage({
                    to: userId,
                    messages: [{type: "text", text: "日記を生成しました"}, {type: "text", text: message}],
                })
            },
            noMessages: () => clients.messaging.pushMessage({
                to: userId,
                messages: [{type: "text", text: "メッセージがありません"}],
            }),
            failedToGenerate: async () => {
                await clients.messaging.pushMessage({
                    to: userId,
                    messages: [{type: "text", text: "日記の生成に失敗しました"}],
                })
            },
            alreadyGenerated: async (message) => {
                await clients.messaging.pushMessage({
                    to: userId,
                    messages: [{type: "text", text: "既に日記が生成されています"}, {type: "text", text: message}],
                })
            },
        },
    });
}