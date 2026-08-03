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
