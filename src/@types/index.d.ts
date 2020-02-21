import { PrismaClient } from '@prisma/client';
import { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import * as mosca from 'mosca';
import { IConfigs } from '../configs';
import { IUtils } from '../utils';
import { IJWTPayload } from '../utils/Token';

export interface IRequestContext {
    user: IJWTPayload;
    prisma: PrismaClient;
    app: FastifyInstance;
}

declare module 'fastify' {
    export interface FastifyInstance<HttpServer = Server, HttpRequest = IncomingMessage, HttpResponse = ServerResponse> {
        mqtt: mosca.Server;
        utils: IUtils;
        configs: IConfigs;
    }
}
