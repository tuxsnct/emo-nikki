import {Context} from "hono";
import {generateClients} from "../../clients";
import {generateDiary, generateErrorResponse, generateOkResponse} from "../../utils";

export const handleGenerateDiary = async (
    c: Context<Env>
) => {
    const clients = generateClients(c.env);
    const uid = c.req.query('uid');
    if (!uid) return c.json(generateErrorResponse('uid is required'), 400);

    return generateDiary({
        clients,
        uid,
        date: new Date(),
        handlers: {
            ok: () => c.json(generateOkResponse('Diary generated')),
            noMessages: () => c.json(generateErrorResponse('No messages found'), 404),
            failedToGenerate: (error) => c.json(generateErrorResponse(`Failed to generate diary: ${error}`), 500),
            alreadyGenerated: (message) => c.json(generateErrorResponse(`Diary already generated: ${message}`), 400),
        },
    });
}