import {messagingApi, WebhookEvent} from "@line/bot-sdk";
import {Clients, generateClients} from "../../clients";
import {Context} from "hono";
import {handleMessage, handleUserDelete, handleUserRegister} from "./";

export * from "./message";
export * from "./user";

enum WebhookCommand {
    AddUser = 'ユーザー登録',
    DeleteUser = 'ユーザー削除',
}

export const handleWebhook = async (
    c: Context<Env>
) => {
    const data = await c.req.json();
    const events: WebhookEvent[] = (data as any).events;
    const clients = generateClients(c.env);

    await Promise.all(
        events.map(async (event: WebhookEvent) => {
            try {
                await handleWebhookEvent(clients, event);
            } catch (err: unknown) {
                if (err instanceof Error) console.error(err);
                return c.json({status: "error"});
            }
        })
    );
    return c.json({message: "ok"});
}

export const handleWebhookEvent = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | undefined> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}, message: {text}} = event;
    if (!replyToken || !userId) return;

    const isCommand = text.startsWith(":");
    const command = text.slice(1);
    const commands = Object.entries(WebhookCommand).map(([_, value]) => value);
    if (isCommand && commands.includes(command as WebhookCommand)) {
        switch (command as keyof Record<WebhookCommand, string>) {
            case "ユーザー登録":
                return handleUserRegister(clients, event);
            case "ユーザー削除":
                return handleUserDelete(clients, event);
        }
    } else {
        return handleMessage(clients, event);
    }
};