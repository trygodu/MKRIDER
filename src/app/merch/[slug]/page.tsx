import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import SlotImage from "@/components/SlotImage";
import ProductCard from "@/components/ProductCard";
import ProductActions from "@/components/ProductActions";
import { getProductBySlug, products } from "@/data/merch";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 4);

  return (
    <div className="py-16">
      <Container>
        <Link href="/merch" className="text-xs font-semibold uppercase tracking-wider text-paper-200/60 hover:text-paper-50">
          ← All Merch
        </Link>

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <SlotImage photo={product.photo} tone={product.tone} className="aspect-square w-full rounded-md" />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="paper">{product.category}</Badge>
              {product.badge && <Badge tone="ember">{product.badge}</Badge>}
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl">{product.name}</h1>
            <p className="mt-3 font-display text-3xl text-ember-500">{formatPrice(product.price)}</p>
            <p className="mt-5 text-paper-200/80 leading-relaxed">{product.description}</p>

            <ul className="mt-6 space-y-2">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-paper-200/70">
                  <span className="mt-1 text-rust-500">✓</span>
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-asphalt-700 pt-8">
              <ProductActions product={product} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-asphalt-700 pt-12">
            <h2 className="font-display text-3xl">More {product.category.toLowerCase()}</h2>
            <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
