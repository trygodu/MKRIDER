export type Tone = "rust" | "blood" | "ember" | "slate";

export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Expert";

export type ItineraryStop = {
  day: number;
  title: string;
  description: string;
};

// A single leg of a riding day, mirroring a classic printed road book
// (cumulative km / leg km / road / place / time / note).
export type RoadbookLeg = {
  cumulativeKm: number;
  legKm: number;
  road: string;
  place: string;
  time: string;
  note: string;
};

export type RoadbookPoi = {
  name: string;
  description: string;
};

export type RoadbookDay = {
  day: number;
  title: string;
  totalKm: number;
  duration: string;
  narrative: string;
  legs: RoadbookLeg[];
  pois: RoadbookPoi[];
};

export type Tour = {
  slug: string;
  name: string;
  region: string;
  country: string;
  continent: "North America" | "Europe" | "Asia" | "Africa";
  difficulty: Difficulty;
  durationDays: number;
  distanceKm: number;
  priceUSD: number;
  groupSizeMax: number;
  tone: Tone;
  tagline: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryStop[];
  includes: string[];
  bikeOptions: string[];
  startDates: string[];
  // Full turn-by-turn road book, shown in the rider Portal once a seat is
  // booked. Optional — tours without one fall back to `itinerary` in the
  // Portal view.
  roadbook?: RoadbookDay[];
};

export type BookingRecord = {
  confirmationId: string;
  tourSlug: string;
  date: string;
  riders: number;
  bikeClass: string;
  experience: string;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
  createdAt: string;
};

export type MerchCategory = "Apparel" | "Gear" | "Accessories" | "Prints";

export type Product = {
  slug: string;
  name: string;
  category: MerchCategory;
  price: number;
  description: string;
  details: string[];
  sizes?: string[];
  tone: Tone;
  badge?: string;
};
