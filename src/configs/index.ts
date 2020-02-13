import * as fp from 'fastify-plugin';
import { config } from 'dotenv';
import { IEmailConfigs } from '../utils/Email';

config();

export interface IConfigs {
    jwtsecret: string;
    mail: IEmailConfigs;
    appname: string;
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
};

export default fp((app, opts, done: (err?: Error) => void) => {
    app.decorate('configs', configs);

    done();
});
