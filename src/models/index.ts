import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Account, IAccountDocument } from './Account';

export interface IModels {
    Account: Model<IAccountDocument>;
    Database?: mongoose.Connection;
}

const models: IModels = {
    Account,
};

export default fp(
    async (app: FastifyInstance, opts: FastifyPluginOptions): Promise<void> => {
        mongoose.connection.on('connected', () => console.log('🚀 Mongo connected successfully'));
        mongoose.connection.on('error', console.log);

        await mongoose.connect(app.configs.mongouri, { useNewUrlParser: true, keepAlive: true, useCreateIndex: true, useUnifiedTopology: true });

        models.Database = mongoose.connection;

        app.decorate('models', models);
    }
);
