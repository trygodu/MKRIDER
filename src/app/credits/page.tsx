import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { tours } from "@/data/tours";
import { products } from "@/data/merch";
import { RIDER_PHOTOS } from "@/data/riderPhotos";
import { Photo } from "@/data/types";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Sources and licenses for the real photography used across the MK Rider site.",
};

function CreditRow({ label, photo }: { label: string; photo: Photo }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-asphalt-700 py-4 text-sm">
      <div>
        <p className="font-semibold text-paper-50">{label}</p>
        <p className="text-paper-200/60">{photo.alt}</p>
      </div>
      <a
        href={photo.sourceUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="shrink-0 text-xs font-semibold uppercase tracking-wider text-rust-400 hover:text-rust-300"
      >
        {photo.source} ↗
      </a>
    </div>
  );
}

export default function CreditsPage() {
  const tourCredits = tours.filter((t) => t.photo);
  const merchCredits = products.filter((p) => p.photo);
  const riderCredits = Object.entries(RIDER_PHOTOS);

  return (
    <div className="py-20">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Photo Credits"
          title="Where the real photos on this site come from."
          description="Tour photography is sourced from Wikimedia Commons under Creative Commons licenses that require attribution — credited here with a link to the original file page. Brand and merch photography is sourced from Pexels, which doesn't require attribution, but we're listing it anyway for transparency."
        />

        <div className="mt-12">
          <h2 className="font-display text-2xl">Tour Locations</h2>
          <div className="mt-2">
            {tourCredits.map((t) => (
              <CreditRow key={t.slug} label={t.name} photo={t.photo!} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl">MK Rider Brand Photography</h2>
          <p className="mt-2 text-sm text-paper-200/60">
            Generic, faceless touring photography used across the homepage, guide, and about
            pages — not photos of MK Rider personally.
          </p>
          <div className="mt-2">
            {riderCredits.map(([key, photo]) => (
              <CreditRow key={key} label={photo.alt} photo={photo} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl">Merch</h2>
          <p className="mt-2 text-sm text-paper-200/60">
            Generic stock photography standing in for product photos — MK Rider merch is
            fictional, so these aren&apos;t photos of the actual items.
          </p>
          <div className="mt-2">
            {merchCredits.map((p) => (
              <CreditRow key={p.slug} label={p.name} photo={p.photo!} />
            ))}
          </div>
        </div>

        <p className="mt-12 text-xs text-paper-200/40">
          All images are linked directly from their source rather than rehosted. If a link ever
          breaks, that slot automatically falls back to MK Rider&apos;s generated route-art
          placeholder.
        </p>
      </Container>
    </div>
  );
}
