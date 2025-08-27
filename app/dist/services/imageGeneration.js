import sharp from 'sharp';
import { isDryRun } from '../env.js';
import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
export async function generateImage(input) {
    const { productPngPath, ideaLabel, colorPalette, styleHints, width = 1024, height = 1024 } = input;
    const outDir = path.resolve('data/generated');
    await fs.mkdir(outDir, { recursive: true });
    const outPath = path.join(outDir, `${randomUUID()}.png`);
    if (isDryRun) {
        // Simple composite: use first color as background, overlay product centered
        const bgColor = colorPalette[0] || '#ffffff';
        const canvas = sharp({ create: { width, height, channels: 4, background: bgColor } });
        const product = await sharp(productPngPath).resize(Math.floor(width * 0.7), Math.floor(height * 0.7), { fit: 'inside' }).toBuffer();
        await canvas
            .composite([{ input: product, gravity: 'center' }])
            .png()
            .toFile(outPath);
        return { filePath: outPath };
    }
    // Placeholder for real MJ or diffusion API; return product as is for now
    await fs.copyFile(productPngPath, outPath);
    return { filePath: outPath };
}
//# sourceMappingURL=imageGeneration.js.map