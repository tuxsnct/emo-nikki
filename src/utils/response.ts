export type JsonResponse = {
    status: 'ok' | 'error';
    message?: string;
}

export const generateOkResponse = (message?: string): JsonResponse => ({status: 'ok', message: message});

export const generateErrorResponse = (message?: string): JsonResponse => ({status: 'error', message: message});