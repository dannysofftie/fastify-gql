import { readFileSync } from 'fs';
import * as jwt from 'jsonwebtoken';
import { join } from 'path';

export interface IJWTPayload {
    id: string;
    account: string;
    email: string;
}

export interface IJWTUtils {
    sign(opts: IJWTPayload): string;
    verify(token: string): IJWTPayload;
}

/**
 *
 * Steps to create RSA key pair
 *
 * 1. ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key
 * 2. openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub
 *
 */
const keys = {
    private: readFileSync(join(__dirname, '..', '..', 'certs', 'jwtRS256.key')),
    public: readFileSync(join(__dirname, '..', '..', 'certs', 'jwtRS256.key.pub')),
};

export const JWTUtils = {
    sign: (options: IJWTPayload) => {
        const { email, id, account }: IJWTPayload = options;

        if (!email || !id || !account) {
            throw new Error('Expects email, account type and id in payload.');
        }

        return jwt.sign({ email, id, account }, keys.private);
    },
    verify: (token: string) => {
        const user: IJWTPayload = { id: null, account: null, email: null };

        try {
            const verified: object = jwt.verify(token, keys.public) as object;

            for (const instance in verified) {
                user[instance] = verified[instance];
            }
        } catch (e) {
            return user;
        }

        return user;
    },
};
