import Link from "next/link";
import { Product } from "@/data/types";
import SlotImage from "./SlotImage";
import Badge from "./ui/Badge";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/merch/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-asphalt-700 bg-asphalt-900 transition-colors hover:border-rust-500/60"
    >
      <div className="relative">
        <SlotImage photo={product.photo} tone={product.tone} className="aspect-square w-full" />
        {product.badge && (
          <span className="absolute left-3 top-3">
            <Badge tone="ember">{product.badge}</Badge>
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[11px] uppercase tracking-wider text-paper-200/50">{product.category}</p>
        <h3 className="font-display text-xl leading-tight text-paper-50 group-hover:text-rust-400">
          {product.name}
        </h3>
        <p className="mt-auto pt-2 text-base font-semibold text-ember-500">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
