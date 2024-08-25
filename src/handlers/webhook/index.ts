import {messagingApi, middleware, WebhookEvent} from "@line/bot-sdk";
import {Clients, generateClients} from "../../clients";
import {Context} from "hono";
import {
    handleAnswerCancel,
    handleAnswerSave,
    handleDiaryToday,
    handleMessage,
    handleQuestionToday,
    handleUserDelete,
    handleUserRegister
} from "./";
import {generateOkResponse} from "../../utils";

export * from "./answer";
export * from "./common";
export * from "./diary";
export * from "./message";
export * from "./question";
export * from "./user";

export enum WebhookCommand {
    UserRegister = 'ユーザー登録',
    UserDelete = 'ユーザー削除',
    DiaryToday = '今日の日記',
    QuestionToday = '今日の振り返り',
    AnswerSave = '回答の保存',
    AnswerCancel = '回答のキャンセル',
}

export const handleWebhook = async (
    c: Context<Env>
) => {
    const data = await c.req.json();
    const events: WebhookEvent[] = (data as any).events;
    const clients = generateClients(c.env);
    middleware({channelAccessToken: c.env.LINE_CHANNEL_ACCESS_TOKEN, channelSecret: c.env.LINE_CHANNEL_SECRET});

    c.executionCtx.waitUntil(
        Promise.all(
            events.map(async (event: WebhookEvent) => {
                try {
                    await handleWebhookEvent(clients, event);
                } catch (err: unknown) {
                    if (err instanceof Error) console.error(err);

                    if (event.type === "message" && event.message.type === "text") {
                        await clients.messaging.replyMessage({
                            replyToken: event.replyToken,
                            messages: [{type: "text", text: "エラーが発生しました"}],
                        });
                    }
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
            case "今日の日記":
                return handleDiaryToday(clients, event);
            case "今日の振り返り":
                return handleQuestionToday(clients, event);
            case "回答の保存":
                return handleAnswerSave(clients, event);
            case "回答のキャンセル":
                return handleAnswerCancel(clients, event);
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