import { FastifyInstance } from 'fastify';
import fp, { PluginOptions } from 'fastify-plugin';
import { GraphQLError } from 'graphql';
import { IEmailOptions, sendEmail } from './Email';
import { error, formatError, IErrorNames } from './Errors';
import { IJWTUtils, JWTUtils } from './Token';

export interface IPlugins {
    jwt: IJWTUtils;
    error: IErrorNames;
    formatError(err: GraphQLError): Error;
    sendEmail(opts: IEmailOptions): Promise<any[]>;
}

const plugins: IPlugins = {
    jwt: JWTUtils,
    error,
    formatError,
    sendEmail,
};

export default fp((app: FastifyInstance, opts: PluginOptions, done: (err?: Error) => void) => {
    app.decorate('plugins', plugins);

    // pass execution to the next middleware in stack
    done();
});
