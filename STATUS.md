# Status

Last updated: 2026-11-16

## Done recently

- Added price lists: new `/prices` and `/ms/harga` pages, plus price tables on the service pages (English + Malay), from the shop's printed price list.
- Added "Prices"/"Harga" links in the nav and footer, price offer structured data, and the two new pages to the sitemap.
- Renamed the tailoring section heading to "Curtains (Langsir)" (EN) / "Langsir" (BM).
- Earlier: added Dengkil, Gamuda Cove and Serenia City service areas (EN + MS).
- All of the above is live on https://www.srlaundry.shop (Cloudflare Pages).

## In progress

- Weekly SEO report: blocked. The Google account that owns Search Console / Analytics is signed out of the browser, so this week's numbers can't be pulled yet.

## Next

- Request Google indexing for `/prices` and `/ms/harga`, and the remaining service pages still waiting.
- Confirm unclear price readings with the client (the "from"/"+" meaning, the smudged ironing bedsheet price, the two covered dry-cleaning rows, and whether the "Langsir" section is really curtains).
- Add carpet and shoe cleaning prices once the client supplies them.
- Optional: submit the two new pages to Bing.

## Decisions

- Deploy only when explicitly asked.
- Static site on Cloudflare Pages; canonical is https://www.srlaundry.shop (apex 301 -> www).
- Malay pages are real `/ms/` URLs, not a translate toggle (better for SEO).
- Prices are shown from the shop's printed list; "from"/"+" means the price starts there.
