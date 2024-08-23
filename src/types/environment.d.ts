type Bindings = {
    CHANNEL_ACCESS_TOKEN: string;
    CHANNEL_SECRET: string;
    GOOGLE_API_KEY: string;
    HASURA_GRAPHQL_ADMIN_SECRET: string;
    HASURA_GRAPHQL_ENDPOINT: string;
}

type Variables = {}

type Env = import("hono").Env<Bindings, Variables>;