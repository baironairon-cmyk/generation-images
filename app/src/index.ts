import { createServer } from './server.js';
import { env } from './env.js';
import { logger } from './logger.js';
import { createBot } from './bot.js';

async function main() {
  const app = createServer();
  app.listen(env.PORT, () => logger.info({ port: env.PORT }, 'HTTP server listening'));

  const bot = createBot();
  try {
    await bot.launch();
    logger.info('Telegram bot launched');
  } catch (err) {
    logger.warn({ err }, 'Telegram bot failed to launch; continuing HTTP server');
  }
}

main().catch((err) => {
  logger.error({ err }, 'fatal error');
  process.exit(1);
});