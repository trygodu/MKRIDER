import Link from "next/link";
import { Tour } from "@/data/types";
import RouteArt from "./RouteArt";
import Badge from "./ui/Badge";

export default function PortalTourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/portal/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-asphalt-700 bg-asphalt-900 transition-colors hover:border-rust-500/60"
    >
      <RouteArt tone={tour.tone} className="h-40 w-full" label={tour.country} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="rust">{tour.difficulty}</Badge>
          <Badge tone="paper">{tour.durationDays} days</Badge>
        </div>
        <h3 className="font-display text-2xl leading-tight text-paper-50 group-hover:text-rust-400">
          {tour.name}
        </h3>
        <p className="text-sm text-paper-200/60">
          {tour.region}, {tour.country}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-asphalt-700 pt-4 text-xs font-semibold uppercase tracking-wider">
          <span className="text-paper-200/50">
            {tour.roadbook?.length ?? tour.itinerary.length} day{" "}
            {tour.roadbook ? "road book" : "itinerary"}
          </span>
          <span className="text-rust-400">View →</span>
        </div>
      </div>
    </Link>
  );
}
