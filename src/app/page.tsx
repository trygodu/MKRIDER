import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import TourCard from "@/components/TourCard";
import ProductCard from "@/components/ProductCard";
import SlotImage from "@/components/SlotImage";
import { tours } from "@/data/tours";
import { products } from "@/data/merch";
import { RIDER_PHOTOS } from "@/data/riderPhotos";

const MARQUEE_ITEMS = [
  "Tail of the Dragon",
  "Transfăgărășan",
  "Stelvio Pass",
  "Route 66",
  "Lofoten & Nordkapp",
  "Hà Giang Loop",
  "Atlas Mountains",
  "Pacific Coast Highway",
];

const STEPS = [
  {
    title: "Pick your road",
    body: "Browse upcoming departures to the routes riders put on their life list — filter by continent, difficulty, or season.",
  },
  {
    title: "Book your seat",
    body: "Lock in a departure date, choose your bike class, and we handle rentals, permits, and lodging.",
  },
  {
    title: "Ride with MK Rider",
    body: "Show up with your gear. MK leads every group personally, with a support van running sweep.",
  },
];

export default function Home() {
  const featuredTours = tours.slice(0, 3);
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-asphalt-700 grain">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-asphalt-900 via-asphalt-950 to-asphalt-950" />
        <div
          className="absolute inset-0 -z-10 opacity-60 road-motif"
          aria-hidden
        />
        <Container className="flex flex-col gap-10 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
              Guided Motorcycle Tours &amp; Lifestyle
            </p>
            <h1 className="font-display text-6xl leading-[0.92] text-paper-50 text-balance sm:text-8xl">
              Ride the roads that live in your search history.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-paper-200/70">
              MK RIDER runs small-group guided motorcycle tours to the
              world&apos;s most legendary riding roads — and builds the gear,
              apparel, and community for the miles in between trips.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/travel" size="lg">
                Find a Tour
              </Button>
              <Button href="/guide" variant="outline" size="lg">
                Meet Your Guide
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 border-t border-asphalt-700 pt-8 sm:grid-cols-4">
            {[
              ["8", "Flagship routes"],
              ["4", "Continents"],
              ["6", "Riders per group, avg."],
              ["1", "Guide who's ridden every mile"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-4xl text-rust-400">{stat}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-paper-200/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>

        <div className="overflow-hidden border-t border-asphalt-700 bg-asphalt-900 py-4">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="font-display text-2xl tracking-wide text-paper-200/40"
              >
                {item} <span className="text-rust-500 mx-4">&bull;</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="Three steps between you and a really good road."
            description="No dealer forms, no solo route planning, no guessing which pass is open in June."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="rounded-md border border-asphalt-700 bg-asphalt-900 p-6">
                <span className="font-display text-5xl text-rust-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm text-paper-200/70">{step.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured tours */}
      <section className="border-y border-asphalt-700 bg-asphalt-900/40 py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Upcoming departures"
              title="Where MK Rider is riding next."
            />
            <Button href="/travel" variant="outline">
              View all tours
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </Container>
      </section>

      {/* Guide teaser */}
      <section className="py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <SlotImage
            photo={RIDER_PHOTOS.rearViewSky}
            tone="blood"
            className="aspect-[4/3] w-full rounded-md"
            label="MK Rider"
          />
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-rust-400">
              Your Guide
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[0.95]">
              MK has personally ridden every mile on this site.
            </h2>
            <p className="mt-5 text-paper-200/70">
              No outsourced local operators, no franchise guides. MK Rider
              scouts every route, negotiates every permit, and leads every
              group personally — because a guided tour is only as good as
              the person up front reading the road.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/guide">Meet MK Rider</Button>
              <Button href="/about" variant="ghost">
                The Brand Story
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured merch */}
      <section className="border-y border-asphalt-700 bg-asphalt-900/40 py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Shop"
              title="Gear that's been on the actual road."
              description="Every piece is tested on tour before it goes on the shelf."
            />
            <Button href="/merch" variant="outline">
              Shop all merch
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container className="flex flex-col items-center gap-6 rounded-lg border border-asphalt-700 bg-gradient-to-br from-rust-700 via-rust-600 to-asphalt-900 px-8 py-16 text-center grain">
          <h2 className="font-display text-4xl sm:text-5xl text-paper-50 text-balance max-w-2xl">
            Your next tank of gas should end somewhere worth talking about.
          </h2>
          <p className="max-w-xl text-paper-50/80">
            Departures fill up eight to twelve riders at a time. Grab a seat
            before the season you want is gone.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/travel" variant="secondary" size="lg">
              Browse Departures
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-paper-50/40">
              Ask About Custom Trips
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
