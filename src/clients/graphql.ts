import {GraphQLClient} from "graphql-request";
import {getSdk} from "../graphql";

export const createGraphQLClient = (env: Bindings) =>
    getSdk(new GraphQLClient(env.HASURA_GRAPHQL_ENDPOINT, {
        headers: {
            'X-Hasura-Admin-Secret': env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
    }));

