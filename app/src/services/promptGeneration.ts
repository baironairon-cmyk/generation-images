import { isDryRun, env } from '../env.js';
// import { OpenAI } from 'openai';

export type TemplateIdea = {
  label: string;
  description: string;
  colorPalette: string[];
  typography: string[];
  styleHints: string[];
};

export type PromptPlan = {
  productCategory: string;
  ideas: TemplateIdea[]; // length 5
};

export async function generatePromptPlan(productHints: string): Promise<PromptPlan> {
  if (env.OPENAI_API_KEY && !isDryRun) {
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });
    const sys = `You are a merch and graphic design assistant. Given a product description, propose 5 creative marketplace card template ideas.
Each idea must include:
- label (2-4 words)
- description (<=40 words)
- colorPalette (3-5 CSS color names or hex)
- typography (2-3 web fonts or style descriptors like bold, condensed)
- styleHints (5-8 short tags e.g., "pool, splash, summer")`;
    const user = `Product: ${productHints}`;
    const resp = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: user },
      ],
      response_format: { type: 'json_schema', json_schema: {
        name: 'PromptPlan',
        schema: {
          type: 'object',
          properties: {
            productCategory: { type: 'string' },
            ideas: {
              type: 'array', minItems: 5, maxItems: 5, items: {
                type: 'object', properties: {
                  label: { type: 'string' },
                  description: { type: 'string' },
                  colorPalette: { type: 'array', items: { type: 'string' } },
                  typography: { type: 'array', items: { type: 'string' } },
                  styleHints: { type: 'array', items: { type: 'string' } },
                }, required: ['label','description','colorPalette','typography','styleHints']
              }
            }
          }, required: ['productCategory','ideas']
        }
      }}
    });
    const content = resp.choices[0]?.message?.content ?? '{}';
    return JSON.parse(content) as PromptPlan;
  }

  // Fallback deterministic plan
  return {
    productCategory: 'generic',
    ideas: [
      { label: 'Fresh Splash', description: 'Aquatic vibe suitable for swimming products.', colorPalette: ['#00AEEF','#003F5C','#FFFFFF'], typography: ['Bold Sans','Condensed Sans'], styleHints: ['pool','splash','summer','clean','high-contrast'] },
      { label: 'Minimal Luxe', description: 'Clean minimal template for premium goods.', colorPalette: ['#111111','#FFFFFF','#E0E0E0'], typography: ['Light Sans','Serif Italic'], styleHints: ['minimal','premium','monochrome','grid','airy'] },
      { label: 'Outdoor Energy', description: 'Dynamic outdoors theme for sports items.', colorPalette: ['#FF6B00','#0A0A0A','#F3F3F3'], typography: ['Compact Sans','Wide Sans'], styleHints: ['dynamic','angled','sport','motion','bold'] },
      { label: 'Soft Pastel', description: 'Gentle pastel palette for kids or home goods.', colorPalette: ['#FADADD','#A3D5FF','#F9F7F7'], typography: ['Rounded Sans','Handwritten'], styleHints: ['soft','pastel','friendly','rounded','warm'] },
      { label: 'Tech Neon', description: 'Futuristic neon for electronics.', colorPalette: ['#0D0D0D','#08F7FE','#FE53BB'], typography: ['Mono','Geometric Sans'], styleHints: ['neon','grid','futuristic','glow','contrast'] },
    ]
  };
}