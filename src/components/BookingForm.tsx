"use client";

import { FormEvent, useState } from "react";
import { Tour } from "@/data/types";
import Button from "./ui/Button";
import { formatDate, formatPrice } from "@/lib/format";

const EXPERIENCE_LEVELS = ["New rider (under 2 years)", "Intermediate", "Experienced", "Expert / track background"];

type Confirmation = {
  confirmationId: string;
  tourName: string;
  date: string;
  riders: number;
  bikeClass: string;
  portalUrl: string;
};

export default function BookingForm({ tour, initialDate }: { tour: Tour; initialDate?: string }) {
  const [date, setDate] = useState(
    initialDate && tour.startDates.includes(initialDate) ? initialDate : tour.startDates[0]
  );
  const [riders, setRiders] = useState(1);
  const [bikeClass, setBikeClass] = useState(tour.bikeOptions[0]);
  const [experience, setExperience] = useState(EXPERIENCE_LEVELS[1]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [agree, setAgree] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name || !email || !agree) {
      setError("Please fill out your name and email, and confirm the waiver terms.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourSlug: tour.slug,
          date,
          riders,
          bikeClass,
          experience,
          name,
          email,
          phone,
          notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setConfirmation(data);
    } catch {
      setError("Network error — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (confirmation) {
    return (
      <div className="rounded-md border border-rust-500/40 bg-rust-500/10 p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
          Booking Request Received
        </p>
        <h2 className="mt-4 font-display text-4xl">You&apos;re on the list.</h2>
        <p className="mt-4 text-paper-200/80">
          Confirmation <span className="font-mono text-paper-50">{confirmation.confirmationId}</span> for{" "}
          <strong className="text-paper-50">{confirmation.tourName}</strong> departing{" "}
          <strong className="text-paper-50">{formatDate(confirmation.date)}</strong> ({confirmation.riders}{" "}
          {confirmation.riders === 1 ? "rider" : "riders"}, {confirmation.bikeClass}).
        </p>
        <p className="mt-2 text-sm text-paper-200/60">
          MK Rider will email you within 24 hours to confirm your bike class, collect a deposit, and send
          gear recommendations.
        </p>

        <div className="mt-8 rounded-md border border-rust-500/30 bg-asphalt-950 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
            Unlocked
          </p>
          <h3 className="mt-2 font-display text-2xl">Your MK Rider Portal is ready.</h3>
          <p className="mt-2 text-sm text-paper-200/70">
            Full kilometer-by-kilometer road book, the rider prep guide, and your packing list —
            all in one place from here to departure.
          </p>
          <Button href={confirmation.portalUrl} className="mt-5">
            Enter Your Portal →
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/travel" variant="ghost">
            Browse More Tours
          </Button>
          <Button href="/" variant="ghost">
            Back Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Departure date
          </label>
          <select
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
          >
            {tour.startDates.map((d) => (
              <option key={d} value={d}>
                {formatDate(d)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Riders
          </label>
          <select
            value={riders}
            onChange={(e) => setRiders(Number(e.target.value))}
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
          >
            {Array.from({ length: tour.groupSizeMax }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "rider" : "riders"}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Bike class
          </label>
          <select
            value={bikeClass}
            onChange={(e) => setBikeClass(e.target.value)}
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
          >
            {tour.bikeOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Riding experience
          </label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
          >
            {EXPERIENCE_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Full name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
            placeholder="Jane Rider"
          />
        </div>
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
            placeholder="jane@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Phone (optional)
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
            placeholder="+1 555 000 0000"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-paper-200/60">
            Anything we should know? (optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-3 text-sm focus:border-rust-500 focus:outline-none"
            placeholder="Dietary needs, riding partner requests, height for bike sizing..."
          />
        </div>
      </div>

      <label className="flex items-start gap-3 text-sm text-paper-200/70">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 h-4 w-4 accent-rust-500"
        />
        I understand this is a request to book — MK Rider will follow up to confirm availability, collect a
        deposit, and send a liability waiver before the seat is final.
      </label>

      {error && <p className="text-sm text-blood-600 bg-blood-600/10 border border-blood-600/30 rounded-sm px-4 py-3">{error}</p>}

      <div className="flex items-center justify-between border-t border-asphalt-700 pt-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-paper-200/50">Estimated total</p>
          <p className="font-display text-3xl text-ember-500">{formatPrice(tour.priceUSD * riders)}</p>
        </div>
        <Button type="submit" disabled={submitting} size="lg">
          {submitting ? "Submitting..." : "Request Booking"}
        </Button>
      </div>
    </form>
  );
}
