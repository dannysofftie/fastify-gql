import App from './bin/www';

const fastify = new App();

export const prisma = fastify.prisma;

export const app = fastify.app;

fastify.start();
