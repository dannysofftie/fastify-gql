import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-fastify';
import fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import servestatic from 'fastify-static';
import { join } from 'path';
import configs from '../configs';
import mqtt from '../libraries/Mqtt';
import plugins from '../plugins';
import { formatError } from '../plugins/Errors';
import schema from '../schemas';
import autoload from '../plugins/Autoload';
import models from '../models';

export default class App {
    public app: FastifyInstance;

    private port: number | string;

    private apolloServer: ApolloServer;

    public prisma: PrismaClient;

    constructor() {
        this.app = fastify({ ignoreTrailingSlash: true, logger: { level: 'warn' } });

        this.port = 5000 || process.env.PORT;

        this.prisma = new PrismaClient();

        this.configs();

        this.apolloServer = new ApolloServer({
            context: ({ request: { raw } }) => {
                const header = `${raw['headers']['authorization']}`;

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
            introspection: process.env.NODE_ENV !== 'production',
        });

        this.app.register(this.apolloServer.createHandler());
    }

    public async start() {
        await this.app.listen(this.port as number, '0.0.0.0').catch(console.log);

        console.log('🚀 Server listening on port', this.app.server.address());

        process.on('uncaughtException', console.error);

        process.on('unhandledRejection', console.error);
    }

    private configs() {
        this.app.register(cors, { preflight: true, credentials: true });

        this.app.register(configs);

        this.app.register(plugins);

        this.app.register(autoload, { dir: join(__dirname, '..', 'services') });

        this.app.register(mqtt);

        this.app.register(models);

        this.app.register(servestatic, { root: join(__dirname, '..', '..', 'public'), wildcard: false, prefix: '/public' });
    }
}
