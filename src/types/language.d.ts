type AnalyzeSentimentRequest = {
    document: {
        content: string;
        type: string;
    };
    encodingType: string;
}

type AnalyzeSentimentResponse = {
    documentSentiment: {
        magnitude: number;
        score: number;
    };
}