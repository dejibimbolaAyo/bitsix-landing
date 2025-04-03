# Page Generator for BitSix Marketing Website

This page generator helps you quickly create new pages with TinaCMS page blocks.

## Features

- Creates route files for Remix
- Generates component templates for TinaCMS blocks
- Updates the Tina schema automatically
- Updates the Vite config with new routes
- Creates placeholder MDX content
- Supports child routes (for dynamic pages)
- Ensures unique field names across components
- **AI-powered content generation** using OpenAI (optional)
- **Written in TypeScript** for improved reliability and type safety

## Usage

1. Run the generator using:

```bash
npm run generate-page
```

Or use the tools menu:

```bash
npm run tools
```

2. Follow the prompts to configure your new page:
   - Page URI: The URL path for the page (e.g., "services/web-design")
   - Parent path: Optional parent directory for organizing routes
   - Use page blocks: Confirm TinaCMS blocks usage
   - Block names: Enter block names (comma-separated, e.g., "hero,content,features")
   - AI content generation: Choose to generate content with OpenAI (requires API key)
   - Page description: Provide a brief description of the page purpose for the AI
   - Child route: Specify if a dynamic child route is needed

## AI Content Generation

The generator can use OpenAI to automatically create relevant content for your page blocks:

1. When prompted, choose "yes" to generate content with OpenAI
2. Enter your OpenAI API key (this is not stored anywhere)
3. Provide a brief description of the page's purpose
4. The AI will generate titles, subtitles, and content for each block
5. This content is automatically added to your MDX files

## Generated Files

The generator creates:

- Component files in `app/components/blocks/[ComponentName]/`
- Template schemas for TinaCMS
- Route files in `app/routes/[path]/`
- MDX content in `content/blockPages/`
- Updates `vite.config.ts` and `tina/schema.ts`

## Naming Convention

- Component names follow PascalCase (e.g., `ServicesHero`)
- Field names follow camelCase with page prefix (e.g., `servicesHeroTitle`)
- Templates use unique names to prevent conflicts

## Examples

Creating a services page with Hero and Content blocks:

- Page URI: "services"
- Blocks: "hero,content"
- Result: ServicesHero and ServicesContent components

Creating a nested page with child route:

- Page URI: "portfolio"
- Blocks: "hero,projects"
- Child route param: "slug"
- Result: Route: /portfolio and /portfolio/:slug

## Development

To modify the generator, edit the TypeScript files in the `scripts` directory:

- `generate-page.ts`: Main page generator script
- `index.ts`: Tools menu interface
