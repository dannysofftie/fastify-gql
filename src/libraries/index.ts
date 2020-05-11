import * as fp from 'fastify-plugin';
import mqtt, { IMQTTUtilities } from './Mqtt';
import * as ws from 'websocket-stream';

export interface ILibraries {
    mqtt: IMQTTUtilities;
    browser: any;
    // add other libraries here
}

export default fp((app, opts, done: (err?: Error) => void) => {
    // @ts-ignore
    ws.createServer({ server: app.server }, mqtt.broker.handle);

    app.decorate('libs', { mqtt });

    done();
});
