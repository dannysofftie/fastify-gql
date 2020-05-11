import * as aedes from 'aedes';
import * as persist from 'aedes-persistence';
import { createServer, Server } from 'net';

export interface IMQTTUtilities {
    broker: aedes.Aedes;
    clients: string[];
    server: Server;
}

const broker = aedes.Server({ persistence: persist(), concurrency: 200, connectTimeout: 40000 });

const server = createServer();

server.listen(process.env.MQTT_PORT, () => console.log(`🚀 MQTT broker listening on %s`, process.env.MQTT_PORT));

const clients: string[] = [];

/**
 * For internal use only,
 *
 * Use this to monitor registration of new clients to mqtt's registration pool.
 * We won't act on this event when server successfully delivers message to agents, since we're monitoring
 * event `ack` above.
 */
broker.on('publish', (packet) => {
    const topic: string = packet['topic'];

    // this is a system internal message
    if (/\$SYS/.test(topic)) {
        const clientId = Buffer.from(packet['payload'] as string, 'base64').toString();

        const agentIndex = clients.findIndex((a) => a.toString() === clientId.toString());

        switch (true) {
            case /disconnect/.test(topic):
                clients.splice(agentIndex, 1);

                break;

            case /new/.test(topic):
                clients.push(clientId);

                break;

            default:
                // ignore system internal heartbeat messages

                break;
        }
    }
});

export default { broker, clients, server };
