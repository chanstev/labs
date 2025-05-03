# GitHub Pages and Custom Domain Setup

## 1. GitHub Pages Setup
- Place all site content in the `docs/` directory.
- Ensure there is an `index.html` or `index.md` in `docs/`.
- Add a `_config.yml` in `docs/` with the desired theme and settings.
- In the repository, go to **Settings > Pages**.
- Set the source to the `main` branch and `/docs` folder.
- (Optional) Add a `CNAME` file in `docs/` with your custom domain (see below).

## 2. Custom Domain DNS Setup
- Create a `CNAME` file in the `docs/` directory containing your custom domain, e.g.:
  ```
  labs.chansteven.com
  ```
- In your DNS provider's dashboard, add a CNAME record:
  - **Name/Host:** `labs` (or leave blank for root, depending on provider)
  - **Type:** CNAME
  - **Value/Points to:** `chanstev.github.io.` (note the trailing dot is required by some providers)
- Save the DNS record and wait for propagation (can take up to 24 hours, but often much less).
- In **Settings > Pages** on GitHub, enter your custom domain and click Save.
- Enable "Enforce HTTPS" for secure access.

## 3. Verification
- Visit your custom domain (e.g., https://labs.chansteven.com) after DNS propagation.
- If you see your site, setup is complete. If not, check for typos, DNS propagation, or error messages in the GitHub Pages settings. 