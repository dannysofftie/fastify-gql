import { PrismaClient } from '@prisma/client';
import { IConfigs } from '../src/configs';
import { IMQTTUtilities } from '../src/libraries/Mqtt';
import { IPlugins } from '../src/plugins';
import { IJWTPayload } from '../src/plugins/Token';

declare module 'fastify' {
    interface FastifyInstance {
        mqtt: IMQTTUtilities;
        plugins: IPlugins;
        configs: IConfigs;
    }

    interface IRequestContext {
        user: IJWTPayload;
        prisma: PrismaClient;
        app: FastifyInstance;
    }
}
