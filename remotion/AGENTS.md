# remotion

## Purpose

Remotion source workspace for rendered marketing videos used by the main site.

## Ownership

- `src/Root.tsx` registers exported compositions and output settings
- `src/compositions/` contains the reusable scene code for each rendered video asset
- `package.json` owns the render scripts that write finished files into `../public/videos/`

## Local Contracts

- Public site assets in `public/videos/` are generated from this workspace and should be updated by rendering from here, not hand-editing binary outputs
- Hero and background compositions must work as silent looping web video assets, so avoid intro/outro timing that creates visible loop seams
- The homepage hero asset is a transparent browser video exported as VP9 WebM so the site layout can supply the surrounding surface color
- Keep compositions self-contained with inline styles unless there is a clear shared need across multiple renders

## Work Guidance

- When changing a composition used on the website, update the source in `src/compositions/` and re-render the corresponding output file in `public/videos/`
- Prefer motion patterns that remain legible when cropped into responsive hero cards on the website
- When a page section needs a single product or services illustration, prefer a dedicated Remotion composition over reusing the photo carousel pattern

## Verification

- `npm run build:hero` — render the transparent homepage hero video to `../public/videos/hero-video.webm`
- `npm run build:expertise` — render the transparent Expertise section illustration to `../public/videos/expertise-illustration.webm`
- `npm run build:digital-transformation` — render the transparent digital transformation hero illustration to `../public/videos/digital-transformation-hero.webm`
- `npm run build:digital-transformation-services` — render the transparent digital transformation service-content illustration to `../public/videos/digital-transformation-services.webm`
- `npm run build:digital-transformation-case-studies` — render the transparent case-study illustrations to `../public/videos/digital-transformation-case-study-ops.webm` and `../public/videos/digital-transformation-case-study-analytics.webm`
- `npm run build:product-development` — render the product development page illustration set to `../public/videos/product-development-hero.webm`, `../public/videos/product-development-showcase.webm`, `../public/videos/product-development-testimonials.webm`, and `../public/videos/product-development-building.webm`
- `npm run build:bg` — render the background video to `../public/videos/brand-background.mp4`

## Child DOX Index
