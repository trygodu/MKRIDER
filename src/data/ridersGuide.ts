export type GuideSection = {
  title: string;
  points: string[];
};

// Modernized, brand-voiced version of MK Rider's long-running printed
// road-book safety briefing. Shown to every rider in the Portal after
// booking, regardless of which tour they're on.
export const RIDERS_GUIDE: GuideSection[] = [
  {
    title: "Mountain roads & hairpins",
    points: [
      "Look through the turn, not at it — where your eyes go, the bike goes. Don't commit to a hairpin's exit until you can see it.",
      "Corners tighten to match the mountain, not a drafting table. Expect a lot of linked curves with almost no straights between them.",
      "Downshift and settle into 3,500–4,500 rpm before a technical section — it gives you engine braking on the way in and drive on the way out.",
      "Give trucks room. Don't ride their blind spot, and don't try to force a pass without a long, clear sightline.",
    ],
  },
  {
    title: "Livestock & wildlife",
    points: [
      "Loose dogs are the most dangerous animal on the road — they're unpredictable. Slow down early and never pass one on the side it's facing.",
      "Horses, cattle, and sheep almost never back up. Slow down and, where possible, pass behind them.",
      "In deer or wild boar country (we'll flag it in the day's briefing), moderate your speed — especially at dawn, dusk, and through unfenced parkland.",
    ],
  },
  {
    title: "Riding near cyclists",
    points: [
      "Give at least a full meter of clearance when passing, and only pass with a clean sightline.",
      "On climbs, riders can wobble under effort — give extra margin.",
      "On descents, experienced cyclists carry serious cornering speed but brake far less than you'd expect. When in doubt, hang back until the next straight.",
    ],
  },
  {
    title: "Signage & road rules abroad",
    points: [
      "A solid line is absolute — no passing, no exceptions, and it's enforced even if only your left wheel touches it.",
      "Many narrow rural roads skip the solid centerline entirely; a dashed line there still means proceed with caution, not open passing.",
      "Traffic lights sit at the near corner of the intersection, not across it — look for the signal before you enter the crossing, not after.",
      "There's no right-turn-on-red in Spain or Portugal unless a dedicated signal explicitly allows it.",
    ],
  },
  {
    title: "Riding in cities",
    points: [
      "Buses generally have right of way at intersections and appreciate room to maneuver.",
      "Lane filtering between stopped cars is permitted — hang back and to one side of the car ahead, never dead center, so the driver knows you're there.",
      "If you get separated from the group, stop at the last point you were sure was correct. Don't guess at a turn.",
      "Signal early and confirm the rider behind you has seen it before you change direction — the group moves together through intersections.",
    ],
  },
  {
    title: "Rain & changing weather",
    points: [
      "Smooth inputs only — braking, throttle, and lean all get gentler in the wet.",
      "Switch to Rain mode if your bike has it and let the electronics help.",
      "A fogged visor: crack it open slightly to get airflow moving before it becomes a visibility problem. If it persists, pull over.",
    ],
  },
  {
    title: "Fuel & gear",
    points: [
      "Super unleaded (98 octane), green nozzle, at any station along the route — we never run more than a tank between stops.",
      "Helmets are legally required at all times in Spain and Portugal, no exceptions for short hops.",
      "Full gear, every ride: helmet, jacket, pants, gloves, boots — sized and adjusted before you throw a leg over, not after.",
    ],
  },
  {
    title: "The ten rules we actually enforce",
    points: [
      "Prep the bike and yourself the night before — never make up lost time on the road.",
      "Ride your own pace. The group's speed is set by the guide, not by whoever's fastest.",
      "Track days are for tracks. This is a touring pace, not a race pace.",
      "Alcohol or anything else and riding never mix — zero exceptions, zero exceptions.",
      "Take the breaks. Reflexes fade faster than you'll notice.",
      "Off the bike at every stop — a two-minute stretch beats a sore back at hour four.",
      "Fatigue always wins if you argue with it. Say something before it becomes a problem.",
      "Steady beats fast. A consistent pace gets everyone further than a sprint-and-wait rhythm.",
      "Follow the signage and work with local police — they're not the enemy out here.",
      "Ask the guide anything, anytime. There's no such thing as a dumb question about the road ahead.",
    ],
  },
];

export const PACKING_LIST: string[] = [
  "DOT/ECE-rated helmet (full-face recommended)",
  "Armored jacket & pants, or a one-piece suit",
  "Waterproof over-layer or a rain-rated riding suit",
  "Armored gloves — a warm pair and a summer-weight pair",
  "Waterproof riding boots",
  "Base layers for cold starts (mountain mornings run cold even in summer)",
  "Earplugs",
  "A valid motorcycle license and passport",
  "Phone mount + charging cable (support van has power banks as backup)",
  "Sunscreen and a neck gaiter for sun and wind",
];
