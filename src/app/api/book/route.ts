import { NextRequest, NextResponse } from "next/server";
import { getTourBySlug } from "@/data/tours";

function generateConfirmationId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "";
  for (let i = 0; i < 6; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return `MKR-${id}`;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { tourSlug, date, riders, bikeClass, name, email } = body ?? {};

  if (!tourSlug || !date || !riders || !bikeClass || !name || !email) {
    return NextResponse.json(
      { error: "Missing required booking fields." },
      { status: 400 }
    );
  }

  const tour = getTourBySlug(tourSlug);
  if (!tour) {
    return NextResponse.json({ error: "Tour not found." }, { status: 404 });
  }

  if (!tour.startDates.includes(date)) {
    return NextResponse.json(
      { error: "That departure date is no longer available." },
      { status: 400 }
    );
  }

  const confirmationId = generateConfirmationId();

  // NOTE: this is a demo endpoint — it does not persist bookings or take
  // payment. Wire this up to a database and payment processor before
  // taking this live.
  console.log("[MK Rider] New booking request", {
    confirmationId,
    tourSlug,
    date,
    riders,
    bikeClass,
    name,
    email,
  });

  return NextResponse.json({
    confirmationId,
    tourName: tour.name,
    date,
    riders,
    bikeClass,
  });
}
