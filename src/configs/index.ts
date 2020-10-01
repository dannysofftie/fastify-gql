import { config } from 'dotenv';
import fp from 'fastify-plugin';
import { join } from 'path';
import { IEmailConfigs } from '../plugins/Email';

config();

export interface IConfigs {
    jwtsecret: string;
    mail: IEmailConfigs;
    appname: string;
    firebaseAccountJsonFile: string;
    mongouri: string;
}

export const configs: IConfigs = {
    jwtsecret: process.env.JWT_SECRET,
    mail: {
        host: process.env.APP_EMAIL_HOST,
        port: process.env.APP_EMAIL_HOST.includes('gmail') || process.env.APP_EMAIL_HOST.includes('zoho') ? 587 : 25,
        auth: {
            user: process.env.APP_EMAIL_ADDRESS,
            pass: process.env.APP_EMAIL_PASSWORD,
        },
    },
    appname: process.env.APPLICATION_NAME,
    firebaseAccountJsonFile: join(__dirname, '..', '..', 'config', 'sample-firebase-adminsdk-adgra-26b5699c31.json'),
    mongouri: process.env.MONGO_URI,
};

export default fp(async (app, opts) => {
    app.decorate('configs', configs);
});
