export type Tone = "rust" | "blood" | "ember" | "slate";

export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Expert";

export type ItineraryStop = {
  day: number;
  title: string;
  description: string;
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
