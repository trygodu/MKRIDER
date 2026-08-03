import { getTourBySlug } from "@/data/tours";
import { getBooking } from "@/lib/bookingStore";
import { BookingRecord, Tour } from "@/data/types";

export type PortalPayload = {
  confirmationId: string;
  booking: Pick<BookingRecord, "date" | "riders" | "bikeClass" | "name"> & {
    source: "store" | "link" | "preview";
  };
  tour: Tour;
};

export type PortalLookupParams = {
  tourSlug?: string;
  name?: string;
  date?: string;
  riders?: string;
  bikeClass?: string;
};

// Resolves a Portal payload three ways, in order:
//   1. A real booking in the (in-memory, demo-only) booking store.
//   2. The fallback query params baked into a confirmation link, in case the
//      store missed — e.g. after a serverless cold start. See
//      src/lib/bookingStore.ts for why the store isn't durable.
//   3. The id itself treated as a tour slug — this is what powers the public
//      Portal navigation at /portal, where anyone can open a tour's full
//      road book without a booking. No confirmation ID or login required.
export function resolvePortal(
  id: string,
  fallback?: PortalLookupParams
): PortalPayload | null {
  const stored = getBooking(id);

  if (stored) {
    const tour = getTourBySlug(stored.tourSlug);
    if (!tour) return null;
    return {
      confirmationId: stored.confirmationId,
      booking: {
        date: stored.date,
        riders: stored.riders,
        bikeClass: stored.bikeClass,
        name: stored.name,
        source: "store",
      },
      tour,
    };
  }

  if (fallback?.tourSlug) {
    const tour = getTourBySlug(fallback.tourSlug);
    if (tour) {
      return {
        confirmationId: id.toUpperCase(),
        booking: {
          date: fallback.date ?? tour.startDates[0],
          riders: fallback.riders ? Number(fallback.riders) : 1,
          bikeClass: fallback.bikeClass ?? tour.bikeOptions[0],
          name: fallback.name ?? "Rider",
          source: "link",
        },
        tour,
      };
    }
  }

  const previewTour = getTourBySlug(id.toLowerCase());
  if (previewTour) {
    return {
      confirmationId: previewTour.slug,
      booking: {
        date: previewTour.startDates[0],
        riders: 1,
        bikeClass: previewTour.bikeOptions[0],
        name: "Rider",
        source: "preview",
      },
      tour: previewTour,
    };
  }

  return null;
}
