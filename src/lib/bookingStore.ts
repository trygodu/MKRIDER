import { BookingRecord } from "@/data/types";

// In-memory booking store. This stands in for a real database — it is NOT
// persistent across server restarts or (on serverless hosts) across cold
// starts / multiple function instances. The Portal is designed to degrade
// gracefully when a lookup misses (see src/lib/portal.ts): swap this module
// for a real database-backed store before taking bookings for real.
declare global {
  var __mkRiderBookings: Map<string, BookingRecord> | undefined;
}

const store: Map<string, BookingRecord> =
  globalThis.__mkRiderBookings ?? new Map<string, BookingRecord>();

if (!globalThis.__mkRiderBookings) {
  globalThis.__mkRiderBookings = store;
}

export function saveBooking(record: BookingRecord) {
  store.set(record.confirmationId, record);
}

export function getBooking(confirmationId: string): BookingRecord | undefined {
  return store.get(confirmationId.toUpperCase());
}
