import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import BookingForm from "@/components/BookingForm";
import { getTourBySlug, tours } from "@/data/tours";

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
  return { title: `Book — ${tour.name}` };
}

export default async function BookTourPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ date?: string }>;
}) {
  const { slug } = await params;
  const { date } = await searchParams;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return (
    <div className="py-16">
      <Container className="max-w-3xl">
        <Link
          href={`/travel/${tour.slug}`}
          className="text-xs font-semibold uppercase tracking-wider text-paper-200/60 hover:text-paper-50"
        >
          ← Back to {tour.name}
        </Link>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">Book Your Seat</h1>
        <p className="mt-3 text-paper-200/70">
          {tour.name} · {tour.region}, {tour.country}
        </p>

        <div className="mt-10 rounded-md border border-asphalt-700 bg-asphalt-900 p-6 sm:p-10">
          <BookingForm tour={tour} initialDate={date} />
        </div>
      </Container>
    </div>
  );
}
