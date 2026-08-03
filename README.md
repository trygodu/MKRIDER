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
- `/portal` — Rider Portal lookup (enter a confirmation ID)
- `/portal/[confirmationId]` — Rider Portal: full trip summary, road book, and prep guide

## The Portal

Booking a tour unlocks **the Portal** — a rider-facing area with the full
day-by-day breakdown of the trip: a kilometer-by-kilometer road book (leg
distances, road numbers, timings, place notes) and points-of-interest
write-ups, plus a shared rider prep guide (mountain roads, wildlife,
cyclists, local signage, gear, and the "ten rules") and packing checklist.
It's a modernized, browser-native rebuild of the printed road book MK Rider
used to hand riders on paper — same level of route detail, now searchable,
linkable, and printable (there's a print/PDF button on the page).

How it's wired:

- `POST /api/book` (`src/app/api/book/route.ts`) saves the booking and
  returns a `portalUrl` for the confirmation screen's "Enter Your Portal"
  button.
- `GET /api/portal/[confirmationId]` (`src/app/api/portal/[confirmationId]/route.ts`)
  is the Portal's backend endpoint — given a confirmation ID, it returns the
  booking plus the full tour/road-book payload. `src/app/portal/[confirmationId]/page.tsx`
  renders the same data.
- Only the new flagship tour, `spain-portugal` (`src/data/tours.ts`), has a
  full `roadbook` (turn-by-turn legs + POI write-ups) — it was built out
  from a real, previously-used road book as the reference example. Other
  tours fall back to their simpler `itinerary` field in the Portal view,
  with a note that the full road book ships closer to departure. Add a
  `roadbook` array to any tour to give it the same full treatment.
- **Storage is in-memory** (`src/lib/bookingStore.ts`) — a stand-in for a
  real database, not persistent across restarts or serverless cold starts.
  To make the Portal work anyway, the confirmation link carries the
  booking details as query params (`src/lib/portal.ts` reads the store
  first and falls back to those params), and `/portal` offers manual
  lookup by confirmation ID for anyone without their original link. Before
  taking real bookings, replace `bookingStore.ts` with a real
  database-backed store.

## Content & data

All tours and products are static, typed data in `src/data/tours.ts` and
`src/data/merch.ts` (see `src/data/types.ts`). Update those files to add or
edit tours and products — pages are generated from them automatically via
`generateStaticParams`. The shared Portal prep-guide content lives in
`src/data/ridersGuide.ts`.

Visuals use a generated "route line" motif (`src/components/RouteArt.tsx`)
instead of stock photography, so the whole site reads as one consistent
brand. Swap in real photography by replacing `RouteArt` usages with
`next/image`.

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
