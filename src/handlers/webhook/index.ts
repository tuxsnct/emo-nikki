import {messagingApi, middleware, WebhookEvent} from "@line/bot-sdk";
import {Clients, generateClients} from "../../clients";
import {Context} from "hono";
import {handleDiaryToday, handleMessage, handleUserDelete, handleUserRegister} from "./";
import {generateOkResponse} from "../../utils";

export * from "./diary";
export * from "./message";
export * from "./user";

enum WebhookCommand {
    UserRegister = 'ユーザー登録',
    UserDelete = 'ユーザー削除',
    DiaryToday = '日記の生成',
}

export const handleWebhook = async (
    c: Context<Env>
) => {
    const data = await c.req.json();
    const events: WebhookEvent[] = (data as any).events;
    const clients = generateClients(c.env);
    middleware({channelAccessToken: c.env.CHANNEL_ACCESS_TOKEN, channelSecret: c.env.CHANNEL_SECRET});

    c.executionCtx.waitUntil(
        Promise.all(
            events.map(async (event: WebhookEvent) => {
                try {
                    await handleWebhookEvent(clients, event);
                } catch (err: unknown) {
                    if (err instanceof Error) console.error(err);
                }
            })
        )
    );

    return c.json(generateOkResponse());
}

const handleWebhookEvent = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | void> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}, message: {text}} = event;
    if (!replyToken || !userId) return;

    const isCommand = text.startsWith(":");
    const command = text.slice(1);
    if (isCommand) {
        switch (command as keyof Record<WebhookCommand, string>) {
            case "ユーザー登録":
                return handleUserRegister(clients, event);
            case "ユーザー削除":
                return handleUserDelete(clients, event);
            case "日記の生成":
                return handleDiaryToday(clients, event);
            default:
                return handleUnknownCommand(clients, event);
        }
    } else {
        return handleMessage(clients, event);
    }
};

const handleUnknownCommand = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | undefined> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    await clients.messaging.replyMessage({
        replyToken: replyToken,
        messages: [{type: "text", text: "正しいメッセージを入力してください"}],
    });
}