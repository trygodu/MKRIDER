import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import PrintButton from "@/components/PrintButton";
import RoadbookDayCard from "@/components/RoadbookDayCard";
import RidersGuide from "@/components/RidersGuide";
import { resolvePortal } from "@/lib/portal";
import { formatDate, formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Rider Portal",
};

export default async function PortalPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    tour?: string;
    name?: string;
    date?: string;
    riders?: string;
    bikeClass?: string;
  }>;
}) {
  const { id } = await params;
  const fallback = await searchParams;

  const payload = resolvePortal(id, fallback);

  if (!payload) {
    return (
      <div className="py-24">
        <Container className="max-w-lg text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
            MK Rider Portal
          </p>
          <h1 className="font-display text-4xl">We couldn&apos;t find that trip.</h1>
          <p className="mt-4 text-paper-200/70">
            Double-check the confirmation ID or tour name, or use the direct link from your
            booking confirmation email — it carries a few extra details that make this easier to
            find.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/portal">Browse Road Books</Button>
            <Button href="/contact" variant="outline">
              Contact MK Rider
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  const { tour, booking } = payload;
  const isPreview = booking.source === "preview";
  const firstName = booking.name.split(" ")[0];
  const departure = new Date(booking.date + "T00:00:00");

  return (
    <div className="pb-24">
      <section className="border-b border-asphalt-700 bg-asphalt-900/60 grain">
        <Container className="py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
            {isPreview ? "MK Rider Portal · Road Book Preview" : "MK Rider Portal"}
          </p>
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl leading-[0.95]">
                {isPreview ? tour.name : `Welcome back, ${firstName}.`}
              </h1>
              <p className="mt-3 text-paper-200/70">
                {isPreview ? (
                  <>
                    {tour.region}, {tour.country} · {tour.tagline}
                  </>
                ) : (
                  <>
                    {tour.name} · {tour.region}, {tour.country}
                  </>
                )}
              </p>
              {!isPreview && (
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-paper-200/40">
                  Confirmation {payload.confirmationId}
                </p>
              )}
            </div>
            <PrintButton />
          </div>

          {isPreview ? (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">From</p>
                <p className="mt-1 font-display text-2xl text-ember-500">
                  {formatPrice(tour.priceUSD)}
                </p>
              </div>
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">Duration</p>
                <p className="mt-1 font-display text-2xl text-rust-400">{tour.durationDays} days</p>
              </div>
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">Distance</p>
                <p className="mt-1 font-display text-2xl text-rust-400">
                  {tour.distanceKm.toLocaleString()} km
                </p>
              </div>
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">
                  Next departure
                </p>
                <p className="mt-1 font-display text-2xl text-rust-400">
                  {formatDate(tour.startDates[0])}
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">Departure</p>
                <p className="mt-1 font-display text-2xl text-rust-400">{formatDate(booking.date)}</p>
              </div>
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">Riders</p>
                <p className="mt-1 font-display text-2xl text-rust-400">{booking.riders}</p>
              </div>
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">Bike class</p>
                <p className="mt-1 font-display text-2xl text-rust-400">{booking.bikeClass}</p>
              </div>
              <div className="rounded-md border border-asphalt-700 bg-asphalt-950 p-4">
                <p className="text-[11px] uppercase tracking-wider text-paper-200/50">Total</p>
                <p className="mt-1 font-display text-2xl text-ember-500">
                  {formatPrice(tour.priceUSD * booking.riders)}
                </p>
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge tone="rust">{tour.difficulty}</Badge>
            <Badge tone="paper">{tour.durationDays} days</Badge>
            <Badge tone="paper">{tour.distanceKm.toLocaleString()} km</Badge>
            {isPreview && (
              <Button href={`/travel/${tour.slug}/book`} size="sm" className="ml-2 no-print">
                Book This Tour
              </Button>
            )}
            <Link
              href={`/travel/${tour.slug}`}
              className="ml-auto text-xs font-semibold uppercase tracking-wider text-paper-200/60 hover:text-paper-50"
            >
              View tour page →
            </Link>
          </div>
        </Container>
      </section>

      <Container className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
              Road Book
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">Day by day, turn by turn.</h2>
          </div>
        </div>

        {tour.roadbook && tour.roadbook.length > 0 ? (
          <div className="mt-8 space-y-6">
            {tour.roadbook.map((day) => (
              <RoadbookDayCard key={day.day} day={day} />
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <p className="mb-6 rounded-md border border-dashed border-asphalt-600 bg-asphalt-900/40 p-4 text-sm text-paper-200/60">
              The full kilometer-by-kilometer road book for this tour goes out about two weeks
              before departure, once permits and lodging are locked in. Here&apos;s the day-by-day
              overview for now.
            </p>
            <ol className="space-y-6 border-l border-asphalt-700 pl-6">
              {tour.itinerary.map((stop) => {
                const stopDate = new Date(departure);
                stopDate.setDate(stopDate.getDate() + (stop.day - 1));
                return (
                  <li key={stop.day} className="relative">
                    <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-rust-500 text-[10px] font-bold text-asphalt-950">
                      {stop.day}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <p className="font-semibold text-paper-50">
                        Day {stop.day}: {stop.title}
                      </p>
                      {!isPreview && (
                        <p className="text-xs uppercase tracking-wider text-paper-200/40">
                          {formatDate(stopDate.toISOString().slice(0, 10))}
                        </p>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-paper-200/70">{stop.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </Container>

      <Container className="mt-16">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
          Before You Ride
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">Rider&apos;s prep guide.</h2>
        <p className="mt-3 max-w-2xl text-paper-200/70">
          The same briefing MK Rider gives every group in person, in writing — mountain roads,
          local traffic rules, gear, and the ten rules we actually enforce.
        </p>
        <div className="mt-8">
          <RidersGuide />
        </div>
      </Container>

      <Container className="mt-16">
        <div className="flex flex-col items-center gap-4 rounded-lg border border-asphalt-700 bg-gradient-to-br from-rust-700 via-rust-600 to-asphalt-900 px-8 py-12 text-center grain no-print">
          {isPreview ? (
            <>
              <h2 className="font-display text-3xl text-paper-50">Ready to ride this one?</h2>
              <p className="max-w-md text-paper-50/80">
                Book your seat and this exact road book becomes yours — with your dates, your
                bike class, and your confirmation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button href={`/travel/${tour.slug}/book`} variant="secondary">
                  Book This Tour
                </Button>
                <Button href="/portal" variant="outline" className="border-paper-50/40">
                  Browse Other Road Books
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="font-display text-3xl text-paper-50">Questions before departure?</h2>
              <p className="max-w-md text-paper-50/80">
                This goes straight to MK — deposits, gear sizing, dietary needs, anything.
              </p>
              <Button href="/contact" variant="secondary">
                Contact MK Rider
              </Button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
