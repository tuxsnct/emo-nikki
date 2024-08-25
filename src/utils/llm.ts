import {Clients} from "../clients";
import {DateTime} from "luxon";

type GenerateDiaryHandlers<T> = {
    // any function
    ok: (message: string) => T;
    noMessages: () => T;
    started?: () => T;
    failedToGenerate: (error?: unknown) => T;
    alreadyGenerated: (message: string) => T;
}

type GenerateDiaryParams<T> = {
    clients: Clients;
    uid: string;
    date: DateTime;
    handlers: GenerateDiaryHandlers<T>;
}

export const generateDiary = async <T>({clients, uid, date, handlers}: GenerateDiaryParams<T>): Promise<T> => {
    try {
        const {messages} = await clients.graphql.GetMessages({uid, date: date.toISODate()});
        if (messages.length === 0) return handlers.noMessages();

        const {diaries: currentDiaries} = await clients.graphql.GetDiaryToday({uid, date});
        if (currentDiaries[0]) return handlers.alreadyGenerated(currentDiaries[0].text);

        const {displayName} = await clients.messaging.getProfile(uid);

        if (handlers.started) handlers.started();
        let generatedMessage: string;
        const chatCompletion =
            await clients.openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content:
                            "あなたはメッセージをまとめて日記を作成するアシスタントです。" +
                            "各メッセージは{タイムスタンプ}: {内容}という形式で入力されます。" +
                            "生成する文章中にはなるべく今日の日付やタイムスタンプは記載せず、自然な文章でまとめてください。" +
                            `以下は"${date.toISODate()}"の"${displayName}"さんの日記です。`,
                    },
                    {
                        role: "user",
                        content: messages.map(m => `${DateTime.fromISO(m.created_at).toLocaleString(DateTime.DATETIME_FULL)}: ${m.text}`).join("\n")
                    },
                ],
                temperature: 0.25,
                n: 1,
            });
        const lastMessage = chatCompletion.choices[0].message.content;
        if (lastMessage !== null) generatedMessage = lastMessage;
        else return handlers.failedToGenerate();

        await clients.graphql.AddDiaryToday({uid, date: date.toISODate(), text: generatedMessage});
        const {diaries: updatedDiaries} = await clients.graphql.GetDiaryToday({uid, date: date.toISODate()});
        if (updatedDiaries[0]) return handlers.ok(updatedDiaries[0].text);
        else return handlers.failedToGenerate();
    } catch (e) {
        return handlers.failedToGenerate(e);
    }
}

type GenerateQuestionHandlers<T> = {
    ok: (question: string) => T;
    noDiary: () => T;
    started?: () => T;
    failedToGenerate: (error?: unknown) => T;
    alreadyGenerated: (question: string, answer: string | null | undefined) => T;
}

type GenerateQuestionParams<T> = {
    clients: Clients;
    uid: string;
    date: DateTime;
    handlers: GenerateQuestionHandlers<T>;
}

export const generateQuestionToday = async <T>({
                                                   clients,
                                                   uid,
                                                   date,
                                                   handlers
                                               }: GenerateQuestionParams<T>): Promise<T> => {
    try {
        const {diaries} = await clients.graphql.GetDiaryToday({uid, date: date?.toISODate()});
        if (!diaries[0]) return handlers.noDiary();

        const {questions: currentQuestions} = await clients.graphql.GetQuestionToday({uid, date: date?.toISODate()});
        if (currentQuestions[0]) return handlers.alreadyGenerated(currentQuestions[0].question, currentQuestions[0].answer);

        const {displayName} = await clients.messaging.getProfile(uid);

        if (handlers.started) handlers.started();
        let generatedQuestion: string;
        const chatCompletion =
            await clients.openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content:
                            "あなたは日記を元に1日の振り返りの質問を生成するアシスタントです。" +
                            "生成する質問中にはなるべく今日の日付やタイムスタンプは記載せず、質問を1行だけ生成してください。" +
                            "以下は" + date.toISODate() + "の" + displayName + "さんの日記です。",
                    },
                    {
                        role: "user",
                        content: diaries[0].text,
                    },
                ],
                temperature: 0.25,
                n: 1,
            });
        const lastMessage = chatCompletion.choices[0].message.content;
        if (lastMessage !== null) generatedQuestion = lastMessage;
        else return handlers.failedToGenerate();

        const {insert_questions_one: addedQuestion} =
            await clients.graphql.AddQuestionToday({uid, date: date?.toISODate(), question: generatedQuestion});
        if (addedQuestion) return handlers.ok(generatedQuestion);
        else return handlers.failedToGenerate();
    } catch (e) {
        return handlers.failedToGenerate(e);
    }
}