import {messagingApi} from "@line/bot-sdk";

export const createMessagingApiClient = (env: Bindings) => new messagingApi.MessagingApiClient({channelAccessToken: env.LINE_CHANNEL_ACCESS_TOKEN});