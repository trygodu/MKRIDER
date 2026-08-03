import Link from "next/link";
import { Tour } from "@/data/types";
import SlotImage from "./SlotImage";
import Badge from "./ui/Badge";
import { formatDate, formatPrice, nextStartDate } from "@/lib/format";

export default function TourCard({ tour }: { tour: Tour }) {
  const next = nextStartDate(tour.startDates);

  return (
    <Link
      href={`/travel/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-asphalt-700 bg-asphalt-900 transition-colors hover:border-rust-500/60"
    >
      <SlotImage photo={tour.photo} tone={tour.tone} className="h-48 w-full" label={tour.country} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="rust">{tour.difficulty}</Badge>
          <Badge tone="paper">{tour.durationDays} days</Badge>
        </div>
        <h3 className="font-display text-2xl leading-tight text-paper-50 group-hover:text-rust-400">
          {tour.name}
        </h3>
        <p className="text-sm text-paper-200/60">{tour.region}, {tour.country}</p>
        <p className="line-clamp-2 text-sm text-paper-200/70">{tour.tagline}</p>
        <div className="mt-auto flex items-center justify-between border-t border-asphalt-700 pt-4">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-paper-200/50">Next departure</p>
            <p className="text-sm font-semibold text-paper-100">{formatDate(next.toISOString().slice(0, 10))}</p>
          </div>
          <p className="font-display text-2xl text-ember-500">{formatPrice(tour.priceUSD)}</p>
        </div>
      </div>
    </Link>
  );
}
