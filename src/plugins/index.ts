import * as fp from 'fastify-plugin';
import { IJWTUtils, JWTUtils } from './Token';
import { IErrorNames, error, formatError } from './Errors';
import { GraphQLError } from 'graphql';

export interface IPlugins {
    jwt: IJWTUtils;
    error: IErrorNames;
    formatError(err: GraphQLError): Error;
}

const plugins: IPlugins = {
    jwt: JWTUtils,
    error,
    formatError,
};

export default fp((app, opts, done: (err?: Error) => void) => {
    app.decorate('plugins', plugins);

    // pass execution to the next middleware in stack
    done();
});
