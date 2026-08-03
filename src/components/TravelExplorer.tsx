"use client";

import { useMemo, useState } from "react";
import { Tour, Difficulty } from "@/data/types";
import TourCard from "./TourCard";
import { nextStartDate } from "@/lib/format";

const CONTINENTS = ["All", "North America", "Europe", "Asia", "Africa"] as const;
const DIFFICULTIES: ("All" | Difficulty)[] = ["All", "Easy", "Moderate", "Challenging", "Expert"];
const SORTS = ["Next departure", "Price: low to high", "Price: high to low", "Duration"] as const;

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-paper-200/50">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              value === opt
                ? "border-rust-500 bg-rust-500/15 text-rust-400"
                : "border-asphalt-600 text-paper-200/70 hover:border-paper-200/40"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function TravelExplorer({ tours }: { tours: Tour[] }) {
  const [continent, setContinent] = useState<string>("All");
  const [difficulty, setDifficulty] = useState<string>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Next departure");

  const filtered = useMemo(() => {
    let result = tours.filter((t) => {
      if (continent !== "All" && t.continent !== continent) return false;
      if (difficulty !== "All" && t.difficulty !== difficulty) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "Price: low to high":
          return a.priceUSD - b.priceUSD;
        case "Price: high to low":
          return b.priceUSD - a.priceUSD;
        case "Duration":
          return a.durationDays - b.durationDays;
        default:
          return nextStartDate(a.startDates).getTime() - nextStartDate(b.startDates).getTime();
      }
    });

    return result;
  }, [tours, continent, difficulty, sort]);

  return (
    <div>
      <div className="flex flex-col gap-6 rounded-md border border-asphalt-700 bg-asphalt-900 p-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
        <FilterGroup label="Continent" options={CONTINENTS} value={continent} onChange={setContinent} />
        <FilterGroup label="Difficulty" options={DIFFICULTIES} value={difficulty} onChange={setDifficulty} />
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-paper-200/50">
            Sort by
          </p>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
            className="rounded-sm border border-asphalt-600 bg-asphalt-950 px-3 py-2 text-sm text-paper-50 focus:border-rust-500 focus:outline-none"
          >
            {SORTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-paper-200/50">
        {filtered.length} {filtered.length === 1 ? "tour" : "tours"} found
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-md border border-dashed border-asphalt-600 p-12 text-center text-paper-200/60">
          No tours match those filters yet. Try widening your search, or{" "}
          <a href="/contact" className="text-rust-400 underline">
            ask us about a custom route
          </a>
          .
        </div>
      )}
    </div>
  );
}
