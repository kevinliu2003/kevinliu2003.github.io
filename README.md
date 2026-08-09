# Bingkuan Liu's Homepage

A bilingual personal academic homepage for Bingkuan Liu, deployed with GitHub Pages.

## Features

- English and Chinese language switching
- Light and dark themes
- Responsive desktop and mobile layouts
- Home, resume, publications, blogs, and projects pages
- Downloadable resume
- GitHub Pages deployment from the `main` branch `/docs` folder

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Production build

```bash
npm run build
```

The static site is exported to `out/`.

## Deployment

Build the site and copy the exported files to `docs/` before pushing to `main`:

```bash
npm run build
cp -R out/. docs/
```

GitHub Pages is configured to publish the `main` branch `/docs` folder.

## Template credit

This site is adapted from the open-source personal homepage at [zsy1207/zsy1207.github.io](https://github.com/zsy1207/zsy1207.github.io).
