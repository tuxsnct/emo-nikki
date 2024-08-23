import {createGraphQLClient} from "./graphql";
import {createLanguageClient} from "./language";
import {createMessagingApiClient} from "./messaging";
import {createOpenAIClient} from "./openai";

export type Clients = ReturnType<typeof generateClients>;

export const generateClients = (env: Bindings) => ({
    graphql: createGraphQLClient(env),
    language: createLanguageClient(env),
    messaging: createMessagingApiClient(env),
    openai: createOpenAIClient(env),
});