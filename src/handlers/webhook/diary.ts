import {Clients} from "../../clients";
import {messagingApi, WebhookEvent} from "@line/bot-sdk";
import {generateDiary} from "../../utils";
import {DateTime} from "luxon";

export const handleDiaryToday = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | void> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    return await generateDiary<Promise<messagingApi.ReplyMessageResponse | void>>({
        clients,
        uid: userId,
        date: DateTime.local(),
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
            started: async () => {
                await clients.messaging.pushMessage({
                    to: userId,
                    messages: [{type: "text", text: "日記を生成中です"}],
                });
                await clients.messaging.showLoadingAnimation({chatId: userId, loadingSeconds: 10});
            },
            failedToGenerate: async (error) => {
                await clients.messaging.pushMessage({
                    to: userId,
                    messages: [{type: "text", text: "日記の生成に失敗しました"}],
                })
                throw error;
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