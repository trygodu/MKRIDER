"use client";

import { useMemo, useState } from "react";
import { Product, MerchCategory } from "@/data/types";
import ProductCard from "./ProductCard";

const CATEGORY_OPTIONS: ("All" | MerchCategory)[] = ["All", "Apparel", "Gear", "Accessories", "Prints"];

export default function MerchExplorer({
  products,
  initialCategory,
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [category, setCategory] = useState<string>(
    initialCategory && CATEGORY_OPTIONS.includes(initialCategory as MerchCategory)
      ? initialCategory
      : "All"
  );

  const filtered = useMemo(() => {
    if (category === "All") return products;
    return products.filter((p) => p.category === category);
  }, [products, category]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {CATEGORY_OPTIONS.map((opt) => (
          <button
            key={opt}
            onClick={() => setCategory(opt)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
              category === opt
                ? "border-rust-500 bg-rust-500/15 text-rust-400"
                : "border-asphalt-600 text-paper-200/70 hover:border-paper-200/40"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-paper-200/50">
        {filtered.length} {filtered.length === 1 ? "item" : "items"}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
