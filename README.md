# QUASAR Lab India - Website

This repository contains a lightweight, static website for QUASAR Lab India.

## Structure

- `index.html`: Main landing page
- `assets/css/style.css`: Stylesheet
- `assets/js/main.js`: Small interactions
- `assets/img/`: Images and logos
- `LICENSE`: CC0-1.0

## Local preview

Use any static server (Python example):

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy (GitHub Pages)

1. Push the repository to GitHub: `QUASAR-lab-India/Lab`.
2. Ensure GitHub Pages is enabled and set to deploy from the `gh-pages` branch (Workflow-defined) or `/ (root)` on `main`.

### Automatic deploy with Actions

This repo includes a GitHub Actions workflow that builds and publishes the site to `gh-pages`. On push to `main`, the site will deploy automatically.

## Content editing

- Update copy in `index.html`.
- Add team profiles, publications, and projects directly in the relevant sections or load JSON via `assets/js/main.js` if you prefer dynamic population.

## License

Content is released under CC0-1.0 as per `LICENSE`.