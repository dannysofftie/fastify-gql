import * as mosca from 'mosca';
import * as fp from 'fastify-plugin';
import { FastifyInstance } from 'fastify';

/**
 * How to generate authentication certificates for use by the server and clients to connect
 *
 * openssl req -new -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out mqtt-certificate.crt -keyout mqtt-certificate.key
 *
 */

const settings: mosca.ServerOptions = {
    port: 1883,
    logger: {
        name: 'secureMQTTBroker',
        level: 40,
    },
    allowNonSecure: false,
    secure: {
        certPath: '',
        keyPath: '',
        port: 0,
    },
};

const clients = [];

export default fp((app: FastifyInstance, opts, done: (err?: Error) => void) => {
    const server = new mosca.Server(settings);

    server.attachHttpServer(app.server);

    server.on('ready', () => console.log('MQTT broker running'));

    server.authenticate = (client, username, password, callback: (obj: any, auth: boolean) => void) => {
        const authenticated = false;

        // do auth here
        console.log(client);

        if (authenticated) {
            return callback(null, true);
        }

        callback(null, false);
    };

    server.on('clientConnected', client => {
        console.log(client);
    });

    app.decorate('mqtt', server);

    // pass execution to the next middleware/plugin in stack
    done();
});
