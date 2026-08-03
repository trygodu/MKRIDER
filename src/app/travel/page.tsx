import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TravelExplorer from "@/components/TravelExplorer";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Travel — Upcoming Motorcycle Tours",
  description:
    "Browse upcoming MK Rider departures to the world's most famous motorcycle roads, filter by continent and difficulty, and book your seat.",
};

export default function TravelPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Travel"
          title="Upcoming rides to roads worth the miles."
          description="Every departure is led by MK Rider personally, capped at a small group, and fully supported end to end."
        />
        <div className="mt-12">
          <TravelExplorer tours={tours} />
        </div>
      </Container>
    </div>
  );
}
