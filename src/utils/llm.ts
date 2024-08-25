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

        const currentDiary = await clients.graphql.GetDiaryToday({uid, date});
        if (currentDiary.diaries[0]) return handlers.alreadyGenerated(currentDiary.diaries[0].text);

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

        await clients.graphql.AddDiaryToday({uid, date, text: generatedMessage});
        const updatedDiary = await clients.graphql.GetDiaryToday({uid, date});
        if (updatedDiary.diaries[0]) return handlers.ok(updatedDiary.diaries[0].text);
        else return handlers.failedToGenerate();
    } catch (e) {
        return handlers.failedToGenerate(e);
    }
}