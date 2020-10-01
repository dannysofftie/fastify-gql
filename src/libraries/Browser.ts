import { FastifyInstance } from 'fastify';
import fp, { PluginOptions } from 'fastify-plugin';
import * as puppeteer from 'puppeteer';

export default fp(async (app: FastifyInstance, opts: PluginOptions) => {
    const browser = await puppeteer.launch({
        ...(process.env.PUPPETEER_ENV === 'docker' && { executablePath: '/usr/bin/chromium-browser' }),
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    // decorate fastify with a browser instance
    app.decorate('browser', browser);
});
