type Bindings = {
    LINE_CHANNEL_ACCESS_TOKEN: string;
    LINE_CHANNEL_SECRET: string;
    GOOGLE_API_KEY: string;
    HASURA_GRAPHQL_ADMIN_SECRET: string;
    HASURA_GRAPHQL_ENDPOINT: string;
    OPENAI_API_KEY: string;
    OPENAI_API_ENDPOINT: string;
}

type Variables = {}

type Env = {
    Bindings: Bindings;
    Variables: Variables;
}