import * as fp from 'fastify-plugin';
import { IJWTUtils, JWTUtils } from './Token';
import { IErrorNames, error, formatError } from './Errors';
import { GraphQLError } from 'graphql';

export interface IUtils {
    jwt: IJWTUtils;
    error: IErrorNames;
    formatError(err: GraphQLError): Error;
}

const utils: IUtils = {
    jwt: JWTUtils,
    error,
    formatError,
};

export default fp((app, opts, done: (err?: Error) => void) => {
    app.decorate('utils', utils);

    // pass execution to the next middleware in stack
    done();
});
