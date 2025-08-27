export type TemplateIdea = {
    label: string;
    description: string;
    colorPalette: string[];
    typography: string[];
    styleHints: string[];
};
export type PromptPlan = {
    productCategory: string;
    ideas: TemplateIdea[];
};
export declare function generatePromptPlan(productHints: string): Promise<PromptPlan>;
//# sourceMappingURL=promptGeneration.d.ts.map