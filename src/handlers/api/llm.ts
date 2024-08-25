import {Context} from "hono";
import {generateClients} from "../../clients";
import {generateDiary, generateErrorResponse, generateOkResponse} from "../../utils";
import {DateTime} from "luxon";

export const handleGenerateDiary = async (
    c: Context<Env>
) => {
    const clients = generateClients(c.env);
    const uid = c.req.query('uid');
    if (!uid) return c.json(generateErrorResponse('uid is required'), 400);
    const dateString = c.req.query('date');
    const date = (dateString !== undefined && dateString !== "null") ? DateTime.fromISO(dateString) : DateTime.local();
    const generateData = (message: string) => ({uid, date: date.toISODate(), text: message});

    return generateDiary<Response>({
        clients,
        uid,
        date,
        handlers: {
            ok:
                (message) => c.json(generateOkResponse('Diary generated', generateData(message)), 200),
            noMessages:
                () => c.json(generateErrorResponse('No messages found'), 404),
            failedToGenerate:
                (error) => c.json(generateErrorResponse(`Failed to generate diary: ${error}`), 500),
            alreadyGenerated:
                (message) => c.json(generateOkResponse(`Diary already generated`, generateData(message)), 201),
        },
    });
}