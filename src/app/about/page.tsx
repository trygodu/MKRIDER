import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import SlotImage from "@/components/SlotImage";
import { RIDER_PHOTOS } from "@/data/riderPhotos";

export const metadata: Metadata = {
  title: "About — The MK Rider Lifestyle",
  description:
    "MK Rider is a motorcycle lifestyle brand built around guided tours, rider-tested gear, and a community that plans its year around roads, not resorts.",
};

const VALUES = [
  {
    title: "Ride it before we sell it",
    body: "Every route is scouted personally. Every jacket, glove, and bag is worn on an actual tour before it goes in the shop.",
  },
  {
    title: "Small groups, on purpose",
    body: "We cap every departure well below what we could sell out, because the roads we run don't get better with more bikes on them.",
  },
  {
    title: "Build for riders, not tourists",
    body: "Our gear is designed to survive a week of weather changes and gravel detours, not just look good parked outside a café.",
  },
];

const FAQS = [
  {
    q: "Do I need my own motorcycle?",
    a: "No — motorcycle rental is included in every tour price, across multiple bike classes. If you'd rather bring your own gear and just rent the bike, that's the default setup.",
  },
  {
    q: "What skill level do I need?",
    a: "Each tour lists a difficulty rating from Easy to Expert. Easy and Moderate tours are built for riders with a season or two of experience; Challenging and Expert tours assume you're comfortable on technical mountain roads.",
  },
  {
    q: "Can I book a custom or private trip?",
    a: "Yes — reach out on the Contact page. Private groups, corporate trips, and custom itineraries on any of our eight regions are available outside the public calendar.",
  },
  {
    q: "Is merch only for people who've ridden with you?",
    a: "Not at all. The shop is open to anyone — a lot of our community wears MK Rider gear on local rides between tours.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative border-b border-asphalt-700 grain">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-asphalt-900 via-asphalt-950 to-asphalt-950" />
        <Container className="py-20 lg:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
            About MK Rider
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-balance sm:text-7xl">
            A brand built around the roads worth planning a year around.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-paper-200/80">
            MK Rider started as one guide leading friends on backroads and
            grew into a small tour company and gear line — but the shape of
            it never changed. We plan trips and build products around one
            question: is this good enough for the road we&apos;d actually
            choose to ride?
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Story" title="Two ideas that turned out to be one brand." />
            <p className="mt-6 text-paper-200/80 leading-relaxed">
              The tours came first: small groups, real routes, one guide who
              actually knew the road. Riders kept asking where the jacket or
              the tail bag came from, and the answer was always &ldquo;we
              built it because nothing off the shelf survived the
              trip.&rdquo;
            </p>
            <p className="mt-4 text-paper-200/80 leading-relaxed">
              That&apos;s the whole brand: a travel company and a gear line
              that exist because of the same standard. If it wouldn&apos;t
              survive a week on the Transfăgărășan, it doesn&apos;t go on the
              site.
            </p>
          </div>
          <SlotImage photo={RIDER_PHOTOS.roadWithCars} tone="ember" className="aspect-[4/3] w-full rounded-md" />
        </Container>
      </section>

      <section className="border-y border-asphalt-700 bg-asphalt-900/40 py-20">
        <Container>
          <SectionHeading eyebrow="What We Believe" title="The rules we don't break for growth." align="center" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-md border border-asphalt-700 bg-asphalt-900 p-6">
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm text-paper-200/70">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked." />
          <div className="mt-10 divide-y divide-asphalt-700 border-y border-asphalt-700">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-paper-50">
                  {f.q}
                  <span className="shrink-0 text-rust-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-paper-200/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-6 rounded-lg border border-asphalt-700 bg-gradient-to-br from-blood-600 via-asphalt-900 to-asphalt-950 px-8 py-16 text-center grain">
          <h2 className="font-display text-4xl sm:text-5xl text-paper-50 text-balance max-w-2xl">
            Come ride with us, or just gear up for the ride you&apos;re already planning.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/travel" variant="secondary" size="lg">
              Browse Tours
            </Button>
            <Button href="/merch" variant="outline" size="lg" className="border-paper-50/40">
              Shop Merch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
