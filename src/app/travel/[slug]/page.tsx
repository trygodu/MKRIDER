import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SlotImage from "@/components/SlotImage";
import TourCard from "@/components/TourCard";
import { getTourBySlug, tours } from "@/data/tours";
import { formatDate, formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: tour.name,
    description: tour.tagline,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = tours.filter((t) => t.slug !== tour.slug && t.continent === tour.continent).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <div>
      <section className="relative border-b border-asphalt-700">
        <SlotImage photo={tour.photo} tone={tour.tone} className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-asphalt-950/55" />
        <Container className="py-20 sm:py-28">
          <Link href="/travel" className="text-xs font-semibold uppercase tracking-wider text-paper-50/70 hover:text-paper-50">
            ← All Tours
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="ember">{tour.difficulty}</Badge>
            <Badge tone="paper">{tour.region}, {tour.country}</Badge>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.95] text-paper-50 text-balance sm:text-7xl">
            {tour.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper-100/85">{tour.tagline}</p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl">Overview</h2>
            <p className="mt-4 text-paper-200/80 leading-relaxed">{tour.description}</p>

            <h3 className="mt-10 font-display text-2xl">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tour.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-paper-200/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rust-500" />
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-2xl">Itinerary</h3>
            <ol className="mt-4 space-y-6 border-l border-asphalt-700 pl-6">
              {tour.itinerary.map((stop) => (
                <li key={stop.day} className="relative">
                  <span className="absolute -left-[31px] flex h-5 w-5 items-center justify-center rounded-full bg-rust-500 text-[10px] font-bold text-asphalt-950">
                    {stop.day}
                  </span>
                  <p className="font-semibold text-paper-50">
                    Day {stop.day}: {stop.title}
                  </p>
                  <p className="mt-1 text-sm text-paper-200/70">{stop.description}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 font-display text-2xl">What&apos;s Included</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {tour.includes.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-paper-200/80">
                  <span className="mt-1 text-rust-500">✓</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Booking summary sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-md border border-asphalt-700 bg-asphalt-900 p-6">
              <p className="font-display text-4xl text-ember-500">{formatPrice(tour.priceUSD)}</p>
              <p className="text-xs uppercase tracking-wider text-paper-200/50">per rider, all-in</p>

              <dl className="mt-6 space-y-3 border-t border-asphalt-700 pt-6 text-sm">
                <div className="flex justify-between">
                  <dt className="text-paper-200/60">Duration</dt>
                  <dd>{tour.durationDays} days</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-paper-200/60">Distance</dt>
                  <dd>{tour.distanceKm.toLocaleString()} km</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-paper-200/60">Group size</dt>
                  <dd>Up to {tour.groupSizeMax} riders</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-paper-200/60">Bikes</dt>
                  <dd className="text-right">{tour.bikeOptions.join(", ")}</dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-asphalt-700 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-paper-200/50">
                  Upcoming departures
                </p>
                <div className="space-y-2">
                  {tour.startDates.map((date) => (
                    <Link
                      key={date}
                      href={`/travel/${tour.slug}/book?date=${date}`}
                      className="flex items-center justify-between rounded-sm border border-asphalt-600 px-3 py-2.5 text-sm hover:border-rust-500"
                    >
                      <span>{formatDate(date)}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-rust-400">
                        Book →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Button href={`/travel/${tour.slug}/book`} className="mt-6 w-full">
                Start Booking
              </Button>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t border-asphalt-700 bg-asphalt-900/40 py-16">
        <Container>
          <h2 className="font-display text-3xl">More rides like this</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
