import { messagingApi } from "@line/bot-sdk";

export const createMessagingApiClient = (env: Bindings) => new messagingApi.MessagingApiClient({ channelAccessToken: env.CHANNEL_ACCESS_TOKEN });