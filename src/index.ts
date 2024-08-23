import { Hono } from 'hono'
import { handleWebhook } from './handlers';

const app = new Hono<Env>();
app.post("/api/webhook", (c) => handleWebhook(c));

export default app
