# MK Rider

A motorcycle lifestyle brand: guided motorcycle tours led by MK Rider, a
merch shop, and the brand story behind both. Built with Next.js (App
Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site map

- `/` — Home: brand intro, featured tours & merch, guide teaser
- `/travel` — Browse upcoming tour departures, filter by continent/difficulty, sort by date/price/duration
- `/travel/[slug]` — Tour detail: overview, itinerary, inclusions, upcoming dates
- `/travel/[slug]/book` — Booking flow (date, riders, bike class, contact info)
- `/merch` — Shop grid, filterable by category (Apparel, Gear, Accessories, Prints)
- `/merch/[slug]` — Product detail with size/quantity selection
- `/guide` — Meet MK Rider: bio, credentials, timeline
- `/about` — Brand story, values, FAQ
- `/contact` — Contact form
- `/portal` — Portal navigation: every tour's road book, open to browse, no login
- `/portal/[id]` — A tour's full road book (public preview) or a booked rider's personalized trip, depending on what `id` resolves to

## The Portal

**The Portal is public.** `/portal` is a navigation grid of all 9 tours —
anyone can open any tour's full day-by-day road book with no login,
account, or confirmation ID. It's meant to be a selling point in itself:
see exactly what a trip looks like before you book it.

Each road book is a kilometer-by-kilometer breakdown (leg distances, road
numbers, timings, place notes) and points-of-interest write-ups, plus a
shared rider prep guide (mountain roads, wildlife, cyclists, local
signage, gear, and the "ten rules") and packing checklist shown on every
tour. It's a modernized, browser-native rebuild of the printed road book
MK Rider used to hand riders on paper — same level of route detail, now
searchable, linkable, and printable (there's a print/PDF button on the
page).

Booking a tour additionally personalizes the same page: the rider's name,
confirmation ID, departure date, bike class, and total replace the generic
preview header. All 9 tours in `src/data/tours.ts` have a full `roadbook`
array (turn-by-turn legs + POI write-ups) — the Spain & Portugal tour was
built out first from a real, previously-used road book as the reference
example, and the rest follow the same format. Add a `roadbook` array to
any new tour to give it the same full treatment; without one, the Portal
falls back to that tour's simpler `itinerary` field with a note that the
full road book ships closer to departure.

How it's wired:

- `GET /api/portal/[id]` (`src/app/api/portal/[id]/route.ts`) is the
  Portal's backend endpoint. `src/lib/portal.ts#resolvePortal` resolves
  `id` three ways, in order: (1) a real booking in the in-memory store,
  (2) the booking-link's fallback query params if the store missed it,
  (3) `id` itself as a tour slug, which is what makes the public,
  no-login navigation possible. `src/app/portal/[id]/page.tsx` renders
  whichever of the three resolves.
- `POST /api/book` (`src/app/api/book/route.ts`) saves the booking and
  returns a `portalUrl` for the confirmation screen's "Enter Your Portal"
  button, which lands on the same personalized view.
- **Storage is in-memory** (`src/lib/bookingStore.ts`) — a stand-in for a
  real database, not persistent across restarts or serverless cold starts.
  This only affects the *personalized* (post-booking) view — the public
  road book navigation reads straight from `src/data/tours.ts` and is
  unaffected. `/portal`'s "Already booked?" box offers manual lookup by
  confirmation ID as a backup if a rider loses their link. Before taking
  real bookings, replace `bookingStore.ts` with a real database-backed
  store.

## Content & data

All tours and products are static, typed data in `src/data/tours.ts` and
`src/data/merch.ts` (see `src/data/types.ts`). Update those files to add or
edit tours and products — pages are generated from them automatically via
`generateStaticParams`. The shared Portal prep-guide content lives in
`src/data/ridersGuide.ts`.

## Photography

Every tour, and a couple of merch items, has a real photo (`photo` field on
`Tour`/`Product` in `src/data/tours.ts` / `src/data/merch.ts`), rendered by
`src/components/SlotImage.tsx`:

- **Tour photos** are real photographs of the actual location (e.g. Ronda's
  Puente Nuevo, the Stelvio Pass hairpins, Cadillac Ranch), hotlinked from
  Wikimedia Commons and credited on `/credits` per their CC license.
- **MK Rider brand photography** (home, guide, about) is generic, faceless
  touring photography from Pexels (`src/data/riderPhotos.ts`) — not photos
  of MK Rider personally.
- **Merch photos** are generic stock product photography standing in for
  items that don't really exist (currently just the jacket and gloves —
  the rest of the shop still uses the generated placeholder; add a `photo`
  field to extend it).

Everything else (the other merch categories, and any tour without a
`photo`) falls back to the generated "route line" gradient art
(`src/components/RouteArt.tsx`) so the site never shows a broken image.
`SlotImage` handles this automatically — on missing data *and* on an
`onError` from a dead link — so it's safe to add a `photo` you're not
100% sure resolves.

**Known limitation:** these images are hotlinked (not downloaded/rehosted),
and the environment they were sourced in couldn't reach the public internet
to verify the URLs actually resolve — they were assembled from real,
web-search-confirmed Wikimedia Commons file pages and Pexels photo pages
using each platform's documented direct-link URL convention, but weren't
visually confirmed loading. Check `/credits` after your first deploy; any
image that doesn't load will visibly fall back to the gradient art, so
nothing breaks, but it's worth a look. For production, downloading and
self-hosting these (or moving to `next/image` with `remotePatterns`
configured for `commons.wikimedia.org` / `images.pexels.com`) would be a
good next step — `SlotImage` currently uses a plain `<img>` on purpose to
avoid needing that config before the URLs are verified.

## Known gaps / next steps for production

This is a front-end build with mocked booking and checkout flows:

- **Booking storage & payment**: bookings are saved to an in-memory store
  (see "The Portal" above), not a database, and no payment is collected.
  Wire up a real database and a payment processor (e.g. Stripe) before
  taking this live.
- **Merch checkout**: "Add to Bag" on product pages is a local UI
  confirmation only — there's no cart or checkout. Integrate a commerce
  backend (Shopify, Stripe Checkout, etc.) to sell for real.
- **Contact form**: submits client-side only; wire it to an email/CRM
  endpoint.
- Replace placeholder contact details (`hello@mkrider.com`) and social
  handles in `src/components/Footer.tsx` and `src/app/contact/page.tsx`
  with real ones.

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · Bebas
Neue + Inter via `next/font`.
