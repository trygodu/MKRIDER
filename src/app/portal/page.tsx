import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PortalTourCard from "@/components/PortalTourCard";
import PortalLookupForm from "@/components/PortalLookupForm";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Portal — Road Books",
  description:
    "Browse the full kilometer-by-kilometer road book for every MK Rider tour, no booking required — plus the rider prep guide and packing list.",
};

export default function PortalIndexPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          eyebrow="MK Rider Portal"
          title="Every road book, open to anyone."
          description="No login, no confirmation ID needed to look around — pick a tour and see the exact turn-by-turn road book, points of interest, and rider prep guide riders get once they book."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <PortalTourCard key={tour.slug} tour={tour} />
          ))}
        </div>

        <div className="mt-16 rounded-md border border-asphalt-700 bg-asphalt-900 p-6 sm:p-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-paper-200/50">
            Already booked?
          </p>
          <h2 className="font-display text-2xl">
            Jump straight to your personalized trip.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-paper-200/60">
            The link in your booking confirmation goes there automatically — this is just a
            backup if you&apos;ve misplaced it.
          </p>
          <div className="mt-5 max-w-md">
            <PortalLookupForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
