import {Clients} from "../clients";

type GenerateDiaryHandlers<T> = {
    // any function
    ok: (message: string) => T;
    noMessages: () => T;
    failedToGenerate: (error?: unknown) => T;
    alreadyGenerated: (message: string) => T;
}

type GenerateDiaryParams<T> = {
    clients: Clients;
    uid: string;
    date: Date;
    handlers: GenerateDiaryHandlers<T>;
}

export const generateDiary = async <T>({clients, uid, date, handlers}: GenerateDiaryParams<T>): Promise<T> => {
    const {messages} = await clients.graphql.GetMessages({
        uid,
        from: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
        to: new Date(date.setHours(23, 59, 59, 999)).toISOString(),
    });
    if (messages.length === 0) return handlers.noMessages();

    try {
        const {diaries_by_pk} = await clients.graphql.GetDiaryToday({uid, date});
        if (diaries_by_pk) return handlers.alreadyGenerated(diaries_by_pk.text);
    } catch (e) {
        return handlers.failedToGenerate(e);
    }

    let generatedMessage: string;
    try {
        const chatCompletion =
            await clients.openai.chat.completions.create({
                model: "gpt-4o-mini-2024-07-18",
                messages: [
                    {
                        role: "system",
                        content:
                            "これらのメッセージから、一日の日記を作成してください。" +
                            "ただし、創造力は膨らませずに一日の流れを表してください。" +
                            "また、Markdown記法は使わずに文章を作成してください。",
                    },
                    {role: "user", content: messages.map(m => m.text).join("\n")},
                ],
                temperature: 0.25,
            });
        const lastMessage = chatCompletion.choices[0].message.content;
        if (lastMessage !== null) generatedMessage = lastMessage;
        else return handlers.failedToGenerate();
    } catch (e) {
        return handlers.failedToGenerate(e);
    }

    try {
        await clients.graphql.AddDiaryToday({uid, text: generatedMessage});
        const {diaries_by_pk} = await clients.graphql.GetDiaryToday({uid, date});
        if (diaries_by_pk) return handlers.ok(diaries_by_pk.text);
        else return handlers.failedToGenerate();
    } catch (e) {
        return handlers.failedToGenerate(e);
    }
}