# carina-karner.at

Personal portfolio website for Carina Karner, Computational Physicist.

Built with [Nuxt 3](https://nuxt.com) and deployed on [GitHub Pages](https://pages.github.com).

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:3000`. The BibTeX parser runs automatically before the dev server starts.

## Publications

Publications are managed via a BibTeX file at the project root.

1. Add entries to `publications.bib`
2. Run `npm run parse-bib` (or it runs automatically with `dev`/`build`/`generate`)
3. The parsed JSON is written to `src/content/publications.json`

## Build

```bash
npm run build
```

## Static Generation (GitHub Pages)

```bash
npm run generate
```

Output is written to `.output/public/`.

## Project Structure

```
src/
├── app.vue                          # App entry
├── assets/scss/
│   ├── variables.scss               # CSS custom properties (theming)
│   └── global.scss                  # Base styles
├── components/
│   ├── NavBar.vue                   # Top navigation bar
│   ├── SiteFooter.vue               # Footer
│   ├── PublicationCard.vue          # Single publication entry
│   └── PublicationList.vue          # Renders all publications
├── content/
│   ├── blog/*.md                    # Blog posts (Markdown)
│   ├── projects/*.md                # Project pages (Markdown)
│   ├── cv.md                        # CV content (Markdown)
│   └── publications.json            # Generated from BibTeX
├── layouts/default.vue              # Default page layout
├── pages/                           # File-based routing
│   ├── index.vue                    # Home
│   ├── about.vue                    # About
│   ├── publications.vue             # Publications
│   ├── cv.vue                       # CV
│   ├── contact.vue                  # Contact
│   ├── blog/                        # Blog
│   └── projects/                    # Projects
├── types/publication.ts             # Publication TypeScript types
publications.bib                     # BibTeX source file
scripts/parse-bib.ts                 # BibTeX → JSON build script
```

## Theming

Colors and fonts are controlled via CSS custom properties in `src/assets/scss/variables.scss`. Edit the `:root` block to change the theme. Dark mode is supported via `prefers-color-scheme`.

## License

Content © Carina Karner. Code MIT.
