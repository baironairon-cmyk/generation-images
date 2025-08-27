import express from 'express';
import { env } from './env.js';
import { logger } from './logger.js';
export function createServer() {
    const app = express();
    app.use(express.json({ limit: '10mb' }));
    app.get('/health', (_req, res) => {
        res.json({ status: 'ok' });
    });
    return app;
}
if (process.argv[1] && process.argv[1].includes('server.js')) {
    const app = createServer();
    app.listen(env.PORT, () => {
        logger.info({ port: env.PORT }, 'HTTP server listening');
    });
}
//# sourceMappingURL=server.js.map