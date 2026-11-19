## Project architecture

- Keep factual platform settings and route metadata in a browser-safe centralized configuration so unverified integrations are never presented as operational.
- Institutional routes share presentation sections and a global shell; profile access forms must not authenticate until the existing platform connection is supplied, preventing parallel app identities.
- Brand media and editorial imagery are imported locally through Vite assets, keeping the original logo intact.
- Translation: Portuguese text in components is the source; `src/lib/i18n/en.ts` maps each exact PT string to English and a client-side DOM translator (`components/site/i18n.tsx`) applies it after hydration, so new PT text must get a matching dictionary entry (audit by crawling pages in EN).
