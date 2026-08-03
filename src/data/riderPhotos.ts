import { Photo } from "./types";

function pexels(id: number, alt: string): Photo {
  return {
    src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    alt,
    source: "Pexels",
    sourceUrl: `https://www.pexels.com/photo/${id}/`,
  };
}

// Faceless rider / brand photography used across MK Rider brand slots
// (home, guide, about). No identifiable faces, per brand guidelines.
export const RIDER_PHOTOS = {
  rearViewSky: pexels(258045, "Motorcyclist seen from behind on an open mountain road against the sky"),
  autumnMountainRoad: pexels(33072744, "Motorcyclist riding a scenic mountain road lined with autumn color"),
  backViewSeated: pexels(11110570, "Rear view of a rider seated on a motorcycle"),
  backViewRider: pexels(19721364, "Back view of a rider on a motorcycle on the open road"),
  parkedOverlook: pexels(27090515, "Motorcycle parked in scenic summer mountain scenery"),
  roadWithCars: pexels(29244519, "Scenic mountain road with a motorcycle among the traffic"),
  adventureLandscape: pexels(30314258, "Motorcycle rider on a scenic adventure through mountain landscape"),
} satisfies Record<string, Photo>;
