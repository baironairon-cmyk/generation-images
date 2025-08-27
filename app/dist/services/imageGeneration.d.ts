export type GenerationInput = {
    productPngPath: string;
    ideaLabel: string;
    colorPalette: string[];
    styleHints: string[];
    width?: number;
    height?: number;
};
export type GenerationResult = {
    filePath: string;
};
export declare function generateImage(input: GenerationInput): Promise<GenerationResult>;
//# sourceMappingURL=imageGeneration.d.ts.map