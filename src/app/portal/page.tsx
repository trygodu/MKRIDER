"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function PortalLookupPage() {
  const router = useRouter();
  const [confirmationId, setConfirmationId] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const id = confirmationId.trim().toUpperCase();
    if (!id) return;
    router.push(`/portal/${encodeURIComponent(id)}`);
  }

  return (
    <div className="py-24">
      <Container className="max-w-lg">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
          MK Rider Portal
        </p>
        <h1 className="font-display text-5xl leading-[0.95]">Your trip, in one place.</h1>
        <p className="mt-4 text-paper-200/70">
          Once you book a seat, MK Rider Portal unlocks the full kilometer-by-kilometer road
          book for your tour — every leg, every pass, every stop — plus the rider prep guide and
          packing list.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 rounded-md border border-asphalt-700 bg-asphalt-900 p-6 sm:p-8">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Confirmation ID
          </label>
          <input
            type="text"
            value={confirmationId}
            onChange={(e) => setConfirmationId(e.target.value)}
            placeholder="MKR-XXXXXX"
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 font-mono text-sm uppercase tracking-wider focus:border-rust-500 focus:outline-none"
          />
          <p className="mt-2 text-xs text-paper-200/50">
            Found in your booking confirmation — use the direct link there if you have it.
          </p>
          <Button type="submit" size="lg" className="mt-6 w-full">
            Open My Portal
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-paper-200/50">
          Haven&apos;t booked yet?{" "}
          <Link href="/travel" className="text-rust-400 underline">
            Browse upcoming tours
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
