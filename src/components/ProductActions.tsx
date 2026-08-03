"use client";

import { useState } from "react";
import { Product } from "@/data/types";
import Button from "./ui/Button";

export default function ProductActions({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes?.[0] ?? "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div>
      {product.sizes && (
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-paper-200/60">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setAdded(false);
                }}
                className={`h-10 min-w-10 rounded-sm border px-3 text-sm font-semibold transition-colors ${
                  size === s
                    ? "border-rust-500 bg-rust-500/15 text-rust-400"
                    : "border-asphalt-600 text-paper-200/70 hover:border-paper-200/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6 flex items-center gap-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-paper-200/60">Qty</p>
        <div className="flex items-center rounded-sm border border-asphalt-600">
          <button
            onClick={() => {
              setQty((q) => Math.max(1, q - 1));
              setAdded(false);
            }}
            className="h-10 w-10 text-lg hover:text-rust-400"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-10 text-center text-sm">{qty}</span>
          <button
            onClick={() => {
              setQty((q) => q + 1);
              setAdded(false);
            }}
            className="h-10 w-10 text-lg hover:text-rust-400"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <Button size="lg" className="w-full" onClick={() => setAdded(true)}>
        {added ? "Added to Bag ✓" : "Add to Bag"}
      </Button>
      {added && (
        <p className="mt-3 text-sm text-paper-200/60">
          {qty} × {product.name}
          {size ? ` (${size})` : ""} added. Checkout coming soon — email{" "}
          <a href="mailto:hello@mkrider.com" className="text-rust-400 underline">
            hello@mkrider.com
          </a>{" "}
          to complete your order for now.
        </p>
      )}
    </div>
  );
}
