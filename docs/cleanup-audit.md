# Website cleanup — 2026-10-14

Kept all pages reachable from the homepage, desktop/mobile navigation, footer,
and links inside retained pages. Followed component imports and service slugs.

## Retained pages

`/`, `/about`, `/blog`, `/blog-details`, `/contact`, `/equipment`, `/faq`, `/issues`, `/materials`, `/pricing`, `/services`, `/small-tools`, `/team-details`, `/timecards`.

`/blog-details` is linked by blog cards. `/team-details` is linked by the About
page. The standalone `/pricing` page and its brand carousel are retained at the user’s request.
The loading and not-found pages also remain.

## Removed

- 14 unlinked routes: `/account`, `/blog-standard`, `/cart`, `/checkout`, `/index-2`, `/index-3`, `/index-dark`, `/portfolio`, `/portfolio-details`, `/product-details`, `/products`, `/team`, `/testimonials`, `/wishlist`.
- 39 components outside the retained pages' import graph.
- 199 unreferenced images (approximately 42 MiB), including unused template imagery and PNG duplicates of active WebP images.
- 9 unused stylesheet files, obsolete template selectors in shared styles, and a duplicate contact stylesheet import (133.3 KiB of CSS removed).
- Unused asset-map entries, `isotope-layout`, `react-curved-text`, and `sass`.
- The obsolete Sass command, whose SCSS entry file did not exist.

Kept shared framework/animation styles, active responsive and interaction styles,
icon fonts, dynamic service-card and phone images, favicon/manifest assets,
and image-preparation inputs. Source preparation scripts remain available.

## Validation

- Production builds passed before and after cleanup.
- All 16 existing tests passed after cleanup.
- The original 13 retained routes returned HTTP 200 in Chrome at 1440px and 390px widths.
- After restoring `/pricing`, the production build passed; `/pricing` returned HTTP 200 at both widths with all three pricing cards and no broken images or runtime errors.
- No broken rendered images or browser runtime errors on those 26 page visits.
- Removed CSS selectors matched no elements on the retained pages at either width.
- Mobile menu opening, Solutions submenu expansion, and navigation to `/services` passed.
- `git diff --check` passed.

These checks cover rendered pages and the stated interactions, not every possible
interactive state. Ambiguous shared styles were retained rather than purged.

An existing blog comment form points to `assets/inc/sendemail.php`, which was
already absent before cleanup. This cleanup does not change that form.
