export type JsonResponse<T extends unknown = unknown> = {
    status: 'ok' | 'error';
    message?: string;
    data?: T;
}

export const generateOkResponse =
    <T>(message?: string, data?: T): JsonResponse => ({status: 'ok', message: message, data});

export const generateErrorResponse =
    <T>(message?: string): JsonResponse => ({status: 'error', message: message});