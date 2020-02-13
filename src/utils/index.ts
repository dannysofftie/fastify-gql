import * as fp from 'fastify-plugin';
import { IJWTUtils, JWTUtils } from './Token';

export interface IUtils {
    jwt: IJWTUtils;
}

const utils: IUtils = {
    jwt: JWTUtils,
};

export default fp((app, opts, done: (err?: Error) => void) => {
    app.decorate('utils', utils);
    done();
});
