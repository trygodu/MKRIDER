import { NextRequest, NextResponse } from "next/server";
import { resolvePortal } from "@/lib/portal";

// PORTAL: given a confirmation ID (and, as a fallback, the booking details
// carried in the query string), returns the rider's full trip payload —
// tour details, the day-by-day road book, and booking summary. Backs the
// /portal/[confirmationId] page; also callable directly for a future
// mobile app or itinerary export.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ confirmationId: string }> }
) {
  const { confirmationId } = await params;
  const { searchParams } = new URL(request.url);

  const payload = resolvePortal(confirmationId, {
    tourSlug: searchParams.get("tour") ?? undefined,
    name: searchParams.get("name") ?? undefined,
    date: searchParams.get("date") ?? undefined,
    riders: searchParams.get("riders") ?? undefined,
    bikeClass: searchParams.get("bikeClass") ?? undefined,
  });

  if (!payload) {
    return NextResponse.json(
      {
        error:
          "We couldn't find that booking. Double-check your confirmation ID, or use the link from your booking email.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(payload);
}
