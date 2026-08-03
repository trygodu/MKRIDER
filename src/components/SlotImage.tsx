"use client";

import { useState } from "react";
import { Photo, Tone } from "@/data/types";
import RouteArt from "./RouteArt";

// Renders a real photo when one is available, with the generated RouteArt
// gradient as an automatic fallback — both on missing data and if the
// remote image fails to load (these are hotlinked from Wikimedia Commons /
// Pexels, so a dead link shouldn't ever break the layout).
export default function SlotImage({
  photo,
  tone = "rust",
  className = "",
  label,
}: {
  photo?: Photo;
  tone?: Tone;
  className?: string;
  label?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (!photo || errored) {
    return <RouteArt tone={tone} className={className} label={label} />;
  }

  return (
    <div className={`relative overflow-hidden bg-asphalt-800 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- plain img on
          purpose: these are hotlinked external URLs (Wikimedia/Pexels), so
          next/image's remote optimizer would need remotePatterns configured
          per host and a working fetch to those hosts, neither of which
          could be verified in the environment these were sourced from. */}
      <img
        src={photo.src}
        alt={photo.alt}
        onError={() => setErrored(true)}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-asphalt-950/70 via-transparent to-transparent" />
      {label && (
        <span className="absolute bottom-3 right-3 rounded-sm bg-asphalt-950/70 px-2.5 py-1 font-display text-[11px] uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
