import {Hono} from 'hono'
import {handleGenerateDiary, handleWebhook} from './handlers';
import {generateErrorResponse} from "./utils";
import {middleware, WebhookEvent} from "@line/bot-sdk";
import {generateClients} from "./clients";

const app = new Hono<Env>();
app.post("/webhook", (c) => handleWebhook(c));
app.post("/api/generate-diary", (c) => handleGenerateDiary(c));
app.onError(async (err, c) => {
    if (c.req.path === "/webhook") {
        // send error message to line
        const events: WebhookEvent[] = (await c.req.json()).events;
        const clients = generateClients(c.env);
        middleware({channelAccessToken: c.env.CHANNEL_ACCESS_TOKEN, channelSecret: c.env.CHANNEL_SECRET});
        c.executionCtx.waitUntil(
            Promise.all(
                events.map(async (event: WebhookEvent) => {
                    try {
                        if (event.type !== "message" || event.message.type !== "text") return;
                        const {replyToken, source: {userId}, message: {text}} = event;
                        if (!replyToken || !userId) return;
                        await clients.messaging.replyMessage({
                            replyToken: event.replyToken,
                            messages: [{type: "text", text: "エラーが発生しました"}],
                        });
                    } catch (err: unknown) {
                        if (err instanceof Error) console.error(err);
                    }
                })
            )
        );
    }

    console.error(err);
    return c.json(generateErrorResponse(err.message), 500)
});

export default app
