import {Hono} from 'hono'
import {handleGenerateDiary, handleWebhook} from './handlers';
import {generateErrorResponse} from "./utils";

const app = new Hono<Env>();
app.post("/webhook", (c) => handleWebhook(c));
app.post("/api/generate-diary", (c) => handleGenerateDiary(c));
app.onError((err, c) => {
    console.error(err);
    return c.json(generateErrorResponse(err.message), 500)
});

export default app
