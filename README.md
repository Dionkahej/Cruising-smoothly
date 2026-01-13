# Cruising Smoothly — Nicecream Truck (Static Website)

What this is
- A small, responsive static website for "Cruising Smoothly" — a nicecream truck in Weligama, Sri Lanka.
- Includes menu, flavours, weekly schedule and an interactive map (Leaflet + OpenStreetMap).

Files
- `index.html` — main page
- `css/styles.css` — styles
- `js/script.js` — renders flavours, schedule and initializes the map
- `images/` — placeholder images (not included). See below.

Notes & customization
1. Images: replace `images/truck-placeholder.jpg`, `images/flavour-*.jpg`, `images/truck-marker.png`, and `images/favicon.png` with your photos/graphics. The script uses fallback placeholders (set `onerror` to fallback image).
2. Contact details: update email/phone in `index.html`.
3. Schedule & flavours: edit the arrays inside `js/script.js` to change locations, times and flavours.
4. Map: coordinates are centered on Weligama. Edit coordinates in `js/script.js` if you want exact GPS points.

Deployment
- Quick: create a new GitHub repository, push these files, and enable GitHub Pages (branch `main` / folder `/`).
- Alternatively: drag & drop to Netlify or Vercel.
- If you prefer a custom domain, update DNS to point to the host's instructions.

Accessibility & SEO
- Add real `alt` text to each image.
- For SEO, replace title/meta description and add structured data (JSON-LD) with your business details.

Need help?
- Tell me if you want:
  - a printable PDF menu instead of the generated text file,
  - social links hooked up,
  - a booking backend (Forms with Netlify or simple Google Forms),
  - translations (Sinhala / Tamil).
