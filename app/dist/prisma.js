import { PrismaClient } from '@prisma/client';
import { logger } from './logger.js';
export const prisma = new PrismaClient({
    log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'error' },
        { emit: 'stdout', level: 'warn' },
    ],
});
prisma.$on('query', (e) => {
    logger.debug({ durationMs: e.duration, query: e.query, params: e.params }, 'prisma query');
});
//# sourceMappingURL=prisma.js.map