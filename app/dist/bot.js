import { Telegraf, Input } from 'telegraf';
import { env } from './env.js';
import { prisma } from './prisma.js';
import { logger } from './logger.js';
import axios from 'axios';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { removeBackground } from './services/backgroundRemoval.js';
import { generatePromptPlan } from './services/promptGeneration.js';
import { generateImage } from './services/imageGeneration.js';
async function downloadTelegramFile(fileId) {
    const baseUrl = `https://api.telegram.org/file/bot${env.TELEGRAM_BOT_TOKEN}`;
    const getPathResp = await axios.get(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`);
    const filePath = getPathResp.data?.result?.file_path;
    if (!filePath)
        throw new Error('Could not resolve file path');
    const url = `${baseUrl}/${filePath}`;
    const res = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = res.data;
    const ext = path.extname(filePath) || '.jpg';
    const outDir = path.resolve('data/uploads');
    await fs.mkdir(outDir, { recursive: true });
    const outPath = path.join(outDir, `${randomUUID()}${ext}`);
    await fs.writeFile(outPath, buffer);
    return { path: outPath };
}
export function createBot() {
    const bot = new Telegraf(env.TELEGRAM_BOT_TOKEN);
    bot.start(async (ctx) => {
        await ctx.reply('Send me a product photo. I will remove background, brainstorm 5 card templates, generate images, and send them back.');
    });
    bot.on('photo', async (ctx) => {
        try {
            const userTg = ctx.from;
            const user = await prisma.user.upsert({
                where: { telegramId: String(userTg.id) },
                update: { username: userTg.username ?? null, firstName: userTg.first_name ?? null, lastName: userTg.last_name ?? null },
                create: { telegramId: String(userTg.id), username: userTg.username ?? null, firstName: userTg.first_name ?? null, lastName: userTg.last_name ?? null },
            });
            const photos = ctx.message?.photo;
            if (!photos || photos.length === 0) {
                await ctx.reply('No photo detected in message.');
                return;
            }
            const largest = photos[photos.length - 1];
            const fileId = largest.file_id;
            await ctx.reply('Got it! Downloading and processing your photo...');
            const downloaded = await downloadTelegramFile(fileId);
            const attached = await prisma.attachedPhoto.create({
                data: {
                    userId: user.id,
                    telegramFileId: fileId,
                    filePath: downloaded.path,
                    mimeType: null,
                    width: largest?.width ?? null,
                    height: largest?.height ?? null,
                }
            });
            const bg = await removeBackground(downloaded.path);
            const processed = await prisma.processedPhoto.create({
                data: {
                    userId: user.id,
                    attachedPhotoId: attached.id,
                    filePath: bg.outputPath,
                    mimeType: bg.mimeType,
                }
            });
            const hintText = ctx.message.caption || 'swimming product';
            const plan = await generatePromptPlan(hintText);
            await ctx.reply('Generating 5 marketplace card images...');
            const results = [];
            for (const idea of plan.ideas) {
                const gen = await generateImage({ productPngPath: processed.filePath, ideaLabel: idea.label, colorPalette: idea.colorPalette, styleHints: idea.styleHints });
                await prisma.generatedImage.create({
                    data: {
                        processedPhotoId: processed.id,
                        provider: 'mock-midjourney',
                        templateLabel: idea.label,
                        promptText: idea.description,
                        metaJson: JSON.stringify({ colorPalette: idea.colorPalette, typography: idea.typography, styleHints: idea.styleHints }),
                        filePath: gen.filePath,
                    }
                });
                results.push({ path: gen.filePath, label: idea.label });
            }
            const media = results.map((r, idx) => ({ type: 'photo', media: Input.fromLocalFile(r.path), caption: `#${idx + 1} ${r.label}` }));
            await ctx.replyWithMediaGroup(media);
        }
        catch (err) {
            logger.error({ err }, 'failed to handle photo');
            await ctx.reply('Sorry, something went wrong while processing your photo.');
        }
    });
    return bot;
}
if (process.argv[1] && process.argv[1].includes('bot.js')) {
    const bot = createBot();
    bot.launch();
}
//# sourceMappingURL=bot.js.map