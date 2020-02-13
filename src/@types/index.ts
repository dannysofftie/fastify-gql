import { IncomingMessage, Server, ServerResponse } from 'http';
import * as mosca from 'mosca';
import { IConfigs } from '../configs';
import { IUtils } from '../utils';
import { IJWTPayload } from '../utils/Token';
import { Prisma } from '../prisma';
import { FastifyInstance } from 'fastify';

export interface IRequestContext {
    user: IJWTPayload;
    prisma: Prisma;
    app: FastifyInstance;
}

declare module 'fastify' {
    export interface FastifyInstance<HttpServer = Server, HttpRequest = IncomingMessage, HttpResponse = ServerResponse> {
        mqtt: mosca.Server;
        utils: IUtils;
        configs: IConfigs;
    }
}
