import { NextRequest, NextResponse } from "next/server";
import { resolvePortal } from "@/lib/portal";

// PORTAL: given either a booking confirmation ID or a tour slug (plus, as a
// fallback, the booking details carried in the query string), returns the
// full trip payload — tour details, the day-by-day road book, and booking
// summary if there is one. A tour slug resolves to a public, unauthenticated
// preview of that tour's road book, which is what backs the /portal
// navigation. Also callable directly for a future mobile app or itinerary
// export.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);

  const payload = resolvePortal(id, {
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
          "We couldn't find that trip. Double-check the confirmation ID or tour name, or use the link from your booking email.",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(payload);
}
