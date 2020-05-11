import { PrismaClient } from '@prisma/client';
import * as apollo from 'apollo-server-fastify';
import * as fastify from 'fastify';
import * as cors from 'fastify-cors';
import { join } from 'path';
import * as servestatic from 'serve-static';
import configs from '../configs';
import libraries from '../libraries';
import plugins from '../plugins';
import { formatError } from '../plugins/Errors';
import schema from '../schemas';

export default class App {
    public app: fastify.FastifyInstance;

    private port: number;

    private apolloServer: apollo.ApolloServer;

    public prisma: PrismaClient;

    constructor() {
        this.app = fastify({ ignoreTrailingSlash: true, logger: { level: 'warn' } });
        this.port = (5000 || process.env.PORT) as number;

        this.prisma = new PrismaClient();

        this.configs();

        this.apolloServer = new apollo.ApolloServer({
            context: ({ req }) => {
                const header = req['headers']['authorization'] as string;

                const obj = { user: null, prisma: this.prisma, app: this.app };

                if (!header) {
                    return obj;
                }

                const token = header.split('Bearer ')[1];

                if (!token) {
                    return obj;
                }

                obj['user'] = this.app.plugins.jwt.verify(token);

                if (!token) {
                    return obj;
                }

                return obj;
            },
            schema,
            formatError,
        });

        this.app.register(this.apolloServer.createHandler());
    }

    public async start() {
        await this.app.listen(this.port as number, '0.0.0.0').catch(console.log);

        console.log('Server listening on port', this.app.server.address());

        process.on('uncaughtException', console.error);

        process.on('unhandledRejection', console.error);
    }

    private configs() {
        this.app.register(cors, { preflight: true, credentials: true });

        this.app.register(configs);

        this.app.register(plugins);

        this.app.register(libraries);

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
