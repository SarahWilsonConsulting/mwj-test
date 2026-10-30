# MWJ Enterprises site preview

Static one-page preview of the mwjenterprises.com copy. Not for public release: the page carries noindex headers and a robots.txt block.

- `public/` holds the site (HTML, CSS, a small script for the mobile menu and form fields).
- `public/_headers` sets security headers and noindex.
- `wrangler.jsonc` points Cloudflare at `public/`. The `name` must match the Worker name in Cloudflare.
