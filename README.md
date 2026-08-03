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

## Content & data

All tours and products are static, typed data in `src/data/tours.ts` and
`src/data/merch.ts` (see `src/data/types.ts`). Update those files to add or
edit tours and products — pages are generated from them automatically via
`generateStaticParams`.

Visuals use a generated "route line" motif (`src/components/RouteArt.tsx`)
instead of stock photography, so the whole site reads as one consistent
brand. Swap in real photography by replacing `RouteArt` usages with
`next/image`.

## Known gaps / next steps for production

This is a front-end build with mocked booking and checkout flows:

- **Booking**: `POST /api/book` (`src/app/api/book/route.ts`) validates a
  booking request and returns a mock confirmation ID, but does not persist
  bookings, check real availability, or take payment. Wire it up to a
  database and a payment processor (e.g. Stripe) before taking this live.
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
