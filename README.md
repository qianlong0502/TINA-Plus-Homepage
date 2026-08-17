# TINA+ Project Page

Static project page for:

> **TINA+: Probing Residual Visual Knowledge in Unlearned Diffusion Models via Diffusion-Consistent Text-Free Inversion**

The page is bilingual. English is the default language, and visitors can switch to Chinese from the navigation bar.

## Local preview

From this directory, start any static file server. For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deployment

The workflow at `.github/workflows/pages.yml` deploys the site whenever `main` is pushed.

After the first push:

1. Open the GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Open the **Actions** tab and wait for the Pages workflow to finish.

The expected project-page URL is:

```text
https://qianlong0502.github.io/TINA-Plus-Homepage/
```

Paper and code links are intentionally marked as coming soon. Replace them in `index.html` after the public URLs are available.
