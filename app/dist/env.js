import { config } from 'dotenv';
import { z } from 'zod';
config();
const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    TELEGRAM_BOT_TOKEN: z.string(),
    OPENAI_API_KEY: z.string().optional(),
    REMOVE_BG_API_KEY: z.string().optional(),
    MIDJOURNEY_API_KEY: z.string().optional(),
    DATABASE_URL: z.string(),
    DRY_RUN: z.string().optional(),
});
export const env = envSchema.parse(process.env);
export const isDryRun = (process.env.DRY_RUN ?? '').toLowerCase() === 'true';
//# sourceMappingURL=env.js.map