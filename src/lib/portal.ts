import { getTourBySlug } from "@/data/tours";
import { getBooking } from "@/lib/bookingStore";
import { BookingRecord, Tour } from "@/data/types";

export type PortalPayload = {
  confirmationId: string;
  booking: Pick<BookingRecord, "date" | "riders" | "bikeClass" | "name"> & {
    source: "store" | "link";
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

// Resolves a Portal payload two ways: first from the (in-memory, demo-only)
// booking store, then — if that misses, e.g. after a serverless cold start —
// from the fallback query params baked into the confirmation link itself.
// See src/lib/bookingStore.ts for why the store isn't durable.
export function resolvePortal(
  confirmationId: string,
  fallback?: PortalLookupParams
): PortalPayload | null {
  const stored = getBooking(confirmationId);

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
    if (!tour) return null;
    return {
      confirmationId: confirmationId.toUpperCase(),
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

  return null;
}
