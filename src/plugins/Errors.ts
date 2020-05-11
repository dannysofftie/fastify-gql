import { GraphQLError } from 'graphql';

export interface IErrorNames {
    BAD_REQUEST: 'BAD_REQUEST';
    UNAUTHORIZED: 'UNAUTHORIZED';
    PAYMENT_REQUIRED: 'PAYMENT_REQUIRED';
    FORBIDDEN: 'FORBIDDEN';
    NOT_FOUND: 'NOT_FOUND';
    LENGTH_REQUIRED: 'LENGTH_REQUIRED';
    PRECONDITION_FAILED: 'PRECONDITION_FAILED';
    PAYLOAD_TOO_LARGE: 'PAYLOAD_TOO_LARGE';
    URI_TOO_LONG: 'URI_TOO_LONG';
}

export const error: IErrorNames = {
    BAD_REQUEST: 'BAD_REQUEST',
    UNAUTHORIZED: 'UNAUTHORIZED',
    PAYMENT_REQUIRED: 'PAYMENT_REQUIRED',
    FORBIDDEN: 'FORBIDDEN',
    NOT_FOUND: 'NOT_FOUND',
    LENGTH_REQUIRED: 'LENGTH_REQUIRED',
    PRECONDITION_FAILED: 'PRECONDITION_FAILED',
    PAYLOAD_TOO_LARGE: 'PAYLOAD_TOO_LARGE',
    URI_TOO_LONG: 'URI_TOO_LONG',
};

const errorType = {
    BAD_REQUEST: {
        message: 'Bad Request',
        statusCode: 400,
    },
    UNAUTHORIZED: {
        message: 'Unauthorized',
        statusCode: 401,
    },
    PAYMENT_REQUIRED: {
        message: 'Payment Required',
        statusCode: 402,
    },
    FORBIDDEN: {
        message: 'Forbidden',
        statusCode: 403,
    },
    NOT_FOUND: {
        message: 'Not Found',
        statusCode: 404,
    },
    LENGTH_REQUIRED: {
        message: 'Length Required',
        statusCode: 411,
    },
    PRECONDITION_FAILED: {
        message: 'Precondition Failed',
        statusCode: 412,
    },
    PAYLOAD_TOO_LARGE: {
        message: 'Payload Too Large',
        statusCode: 413,
    },
    URI_TOO_LONG: {
        message: 'URI Too Long',
        statusCode: 414,
    },
};

/**
 * Format error to meaningful error messages
 *
 * @param {Error} err
 * @returns
 */
export const formatError = (err: GraphQLError) => {
    if (error[err['message']]) {
        return errorType[err['message']];
    }

    return err['message'];
};
