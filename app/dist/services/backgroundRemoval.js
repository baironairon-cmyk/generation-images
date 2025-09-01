import axios from 'axios';
import sharp from 'sharp';
import { env, isDryRun } from '../env.js';
import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import FormData from 'form-data';
export async function removeBackground(inputPath, mimeTypeHint) {
    const outputDir = path.resolve('data/processed');
    await fs.mkdir(outputDir, { recursive: true });
    const outPath = path.join(outputDir, `${randomUUID()}.png`);
    if (env.REMOVE_BG_API_KEY && !isDryRun) {
        const form = new FormData();
        // @ts-ignore - FormData in node fetch
        form.append('image_file', await fs.readFile(inputPath), path.basename(inputPath));
        form.append('size', 'auto');
        const response = await axios.post('https://api.remove.bg/v1.0/removebg', form, {
            headers: {
                'X-Api-Key': env.REMOVE_BG_API_KEY,
                ...form.getHeaders?.(),
            },
            responseType: 'arraybuffer',
            validateStatus: () => true,
        });
        if (response.status !== 200) {
            throw new Error(`remove.bg failed: ${response.status} ${response.statusText} ${response.data?.toString?.()}`);
        }
        await fs.writeFile(outPath, response.data);
        return { outputPath: outPath, mimeType: 'image/png' };
    }
    // Fallback mock: ensure PNG with opaque alpha (no real background removal)
    const image = sharp(inputPath).png();
    await image.toFile(outPath);
    return { outputPath: outPath, mimeType: 'image/png' };
}
//# sourceMappingURL=backgroundRemoval.js.map