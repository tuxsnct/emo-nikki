import {Clients} from "../../clients";
import {messagingApi, WebhookEvent} from "@line/bot-sdk";
import {handleNotRegistered} from "./common";
import {DateTime} from "luxon";

export const handleAnswerSave = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | void> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    const date = DateTime.local();
    const {users, question_sessions} = await clients.graphql.GetUserSession({uid: userId, date: date.toISODate()});
    if (users.length === 0) return await handleNotRegistered(clients, replyToken);
    else if (!question_sessions[0].answer) return await handleNotAnswering(clients, replyToken);

    let message: string;
    const {insert_questions_one: savedQuestion} = await clients.graphql.SaveQuestionAndAnswer({
        uid: userId,
        date: date.toISODate(),
        question: question_sessions[0].question,
        answer: question_sessions[0].answer
    });
    if (savedQuestion) message = "回答を保存しました";
    else message = "回答の保存に失敗しました";
    await clients.messaging.replyMessage({replyToken: replyToken, messages: [{type: "text", text: message}]});
}

export const handleAnswerCancel = async (
    clients: Clients,
    event: WebhookEvent
): Promise<messagingApi.ReplyMessageResponse | void> => {
    if (event.type !== "message" || event.message.type !== "text") return;
    const {replyToken, source: {userId}} = event;
    if (!replyToken || !userId) return;

    const date = DateTime.local();
    const {users, question_sessions} = await clients.graphql.GetUserSession({uid: userId, date: date.toISODate()});
    if (users.length === 0) return await handleNotRegistered(clients, replyToken);
    else if (!question_sessions[0]) return await handleNotAnswering(clients, replyToken);

    let message: string;
    const {delete_question_sessions} =
        await clients.graphql.DeleteQuestionSession({uid: userId, date: date.toISODate()});
    if (delete_question_sessions) message = "回答をキャンセルしました";
    else message = "回答のキャンセルに失敗しました";
    await clients.messaging.replyMessage({replyToken: replyToken, messages: [{type: "text", text: message}]});
}

const handleNotAnswering = async (
    clients: Clients,
    replyToken: string
) => {
    const message: messagingApi.TextMessage = {
        type: "text",
        text: "回答中ではありません",
    }
    await clients.messaging.replyMessage({replyToken: replyToken, messages: [message]});
}