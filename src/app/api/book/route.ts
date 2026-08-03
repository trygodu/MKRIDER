import { NextRequest, NextResponse } from "next/server";
import { getTourBySlug } from "@/data/tours";
import { saveBooking } from "@/lib/bookingStore";

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
  const { tourSlug, date, riders, bikeClass, experience, name, email, phone, notes } =
    body ?? {};

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
  const createdAt = new Date().toISOString();

  // NOTE: this is a demo endpoint — it does not take payment, and the
  // booking store (src/lib/bookingStore.ts) is in-memory, not a database.
  // Wire both up before taking this live. The Portal link below carries the
  // booking details as query params specifically so it still works even if
  // the in-memory store has been reset (e.g. a serverless cold start).
  saveBooking({
    confirmationId,
    tourSlug,
    date,
    riders,
    bikeClass,
    experience: experience ?? "",
    name,
    email,
    phone,
    notes,
    createdAt,
  });

  console.log("[MK Rider] New booking request", {
    confirmationId,
    tourSlug,
    date,
    riders,
    bikeClass,
    name,
    email,
  });

  const portalUrl = `/portal/${confirmationId}?tour=${encodeURIComponent(
    tourSlug
  )}&name=${encodeURIComponent(name)}&date=${encodeURIComponent(
    date
  )}&riders=${riders}&bikeClass=${encodeURIComponent(bikeClass)}`;

  return NextResponse.json({
    confirmationId,
    tourName: tour.name,
    date,
    riders,
    bikeClass,
    portalUrl,
  });
}
