import * as fastify from 'fastify';
import * as cors from 'fastify-cors';
import * as apollo from 'apollo-server-fastify';
import { typeDefs } from '../schemas';
import resolversAndMutations from '../resolvers';
import * as servestatic from 'serve-static';
import { join } from 'path';

export default class App {
    private app: fastify.FastifyInstance;

    private port: number;

    private apolloServer: apollo.ApolloServer;

    constructor() {
        this.app = fastify({ ignoreTrailingSlash: true, logger: { level: 'warn' } });
        this.port = (5000 || process.env.PORT) as number;

        this.apolloServer = new apollo.ApolloServer({
            context: req => ({ ...req, app: this.app }),
            typeDefs,
            resolvers: resolversAndMutations,
        });

        this.configs();
    }

    public async start() {
        await this.app.listen(this.port as number, '0.0.0.0').catch(console.log);

        console.log('Server listening on port', this.app.server.address());

        process.on('uncaughtException', console.error);

        process.on('unhandledRejection', console.error);
    }

    private configs() {
        this.app.register(cors, { preflight: true, credentials: true });
        this.app.register(this.apolloServer.createHandler());

        this.app.use((_req, res, callback: (err?: Error) => void) => {
            res.setHeader('Surrogate-Control', 'no-store');
            res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');

            callback();
        });

        // @ts-ignore
        this.app.use('/public', servestatic(join(__dirname, '..', 'public')));
    }
}
