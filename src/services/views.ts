import { FastifyInstance } from 'fastify';

export default (app: FastifyInstance, opts, next: (err?: Error) => void) => {
    app.get('/', {
        handler: (req, res) => {
            res.send({ message: 'Would reply html' });
        },
    });

    next();
};

exports.autoPrefix = '';
