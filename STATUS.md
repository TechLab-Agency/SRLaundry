# Status

Last updated: 2026-11-18

## Done recently

- Price lists live: `/prices` and `/ms/harga`, plus price tables on the service pages (English + Malay), from the shop's printed price list. Indexing requested in Google on 2026-11-11, sitemap resubmitted.
- Tailoring section heading shown as "Curtains (Langsir)" (EN) / "Langsir" (BM). Live.
- Promotion built locally (NOT deployed yet): pop-up on every page (`assets/js/promo.js`), promo strip on the home and price pages, offer structured data (`makesOffer`) on all pages, home page search descriptions mention it. Offer: 10% off when the bill is RM50 or more, valid until 31 Dec 2026.

## In progress

- Promotion wording is confirmed (see Decisions); it only waits for Jimmy's deploy yes.
- Weekly SEO report: blocked. The Google account that owns Search Console / Analytics is signed out in Chrome (asks "Verify it's you"), and OpenSEO is not linked to Search Console or Analytics for the SR Laundry project. Last report written: 2026-10-21 (plus the manual October report).

## Next

- Deploy the promotion once approved, then request Google indexing for the home pages and resubmit the sitemap.
- Get a Google sign-in (or link OpenSEO integrations) so the weekly report can run, then write this week's report.
- Check indexing of `/prices` and `/ms/harga` in Search Console.
- REMOVE THE PROMOTION AFTER 31 DEC 2026: delete the `promo.js` script line and `promo-band` sections, the `makesOffer` block in the page data, and the "10% off" text in the home page descriptions. The pop-up hides itself after 31 Dec, but the static text does not.
- Add carpet and shoe cleaning prices once the client supplies them (their price list photos have none).
- Ask the client what the "Langsir" section on the tailoring list really covers.

## Deadline: remove the promotion on 1 Jan 2027

- Any session reading this on or after 1 Jan 2027 (today's date >= 2027-01-01): tell Jimmy the promotion has ended and ask him to say "remove it". Do not wait for the scheduled reminder (task `srlaundry-remove-promo-reminder`, 9:00 am on 1 Jan 2027, only runs while the Claude app is open on his PC).
- First check whether the promotion ever went live: fetch https://www.srlaundry.shop/ and look for "promo-band" / "10% off". If it is not live, there is nothing to remove from the live site; just clean up the local code.
- If it is live and Jimmy says yes: do the removal steps in "Next" above (both English and `/ms/` pages), bump the `?v=` cache-bust, update sitemap lastmod, commit, push, deploy only on his explicit yes, verify the live site, then request Google indexing for `/` and `/ms/`.
- Alternative: if the client wants to extend the offer, change `END` in `assets/js/promo.js` and the "31 December 2026" text and `validThrough` instead of removing it.

## Decisions

- Deploy only when explicitly asked.
- Static site on Cloudflare Pages; canonical is https://www.srlaundry.shop (apex 301 -> www). Cloudflare login on this PC is bluej.app@gmail.com.
- Malay pages are real `/ms/` URLs, not a translate toggle (better for SEO).
- "From" on prices (and "<" / "++" on the shop's sign) means the price starts at that amount. Confirmed by Jimmy 2026-11-18.
- Promotion wording CONFIRMED by Jimmy 2026-11-18: any bill of RM50 or more gets 10% off (a minimum spend, not 10% per RM50). Nothing excluded; the client did not mention any exclusions. Pop-up shows after 6 seconds, once every 3 days per visitor. Still waiting for his "deploy".
