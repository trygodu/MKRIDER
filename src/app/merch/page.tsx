import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MerchExplorer from "@/components/MerchExplorer";
import { products } from "@/data/merch";

export const metadata: Metadata = {
  title: "Merch — Rider-Tested Gear & Apparel",
  description:
    "Shop MK Rider apparel, riding gear, accessories, and route prints — everything tested on tour before it goes on the shelf.",
};

export default async function MerchPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Merch"
          title="Built for the road, not the rack."
          description="Apparel, riding gear, accessories, and route art — everything gets a real tour before it gets a product photo."
        />
        <div className="mt-12">
          <MerchExplorer products={products} initialCategory={category} />
        </div>
      </Container>
    </div>
  );
}
