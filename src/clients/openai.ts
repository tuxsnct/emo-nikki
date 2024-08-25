import {OpenAI} from 'openai';

export const createOpenAIClient = (env: Bindings) =>
    new OpenAI({
        apiKey: env.OPENAI_API_KEY,
        baseURL: env.OPENAI_API_ENDPOINT,
    });

