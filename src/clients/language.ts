class LanguageClient {
    private readonly apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async analyzeSentiment(text: string): Promise<AnalyzeSentimentResponse> {
        const response = await fetch('https://language.googleapis.com/v1/documents:analyzeSentiment', {
            body: JSON.stringify({
                document: {
                    content: text,
                    type: 'PLAIN_TEXT',
                },
                encodingType: 'UTF8',
            } satisfies AnalyzeSentimentRequest),
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': this.apiKey,
            },
            method: 'POST',
        });
        return await response.json() as AnalyzeSentimentResponse;
    }
}

export const createLanguageClient = (env: Bindings): LanguageClient => new LanguageClient(env.GOOGLE_API_KEY);