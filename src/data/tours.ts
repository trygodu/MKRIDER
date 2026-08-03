import { Tour } from "./types";

export const tours: Tour[] = [
  {
    slug: "tail-of-the-dragon",
    name: "Tail of the Dragon & Blue Ridge Parkway",
    region: "Great Smoky Mountains",
    country: "USA",
    continent: "North America",
    difficulty: "Moderate",
    durationDays: 5,
    distanceKm: 620,
    priceUSD: 1890,
    groupSizeMax: 8,
    tone: "rust",
    tagline: "318 curves in 11 miles, then 469 more miles of ridgeline.",
    description:
      "Five days carving the most famous stretch of asphalt in America and the parkway that connects it to everything else worth riding in Appalachia. Mornings on switchbacks, afternoons on ridge-top straights with views for fifty miles, nights in mountain towns that know how to feed a rider.",
    highlights: [
      "318 curves of Deals Gap, aka Tail of the Dragon",
      "Blue Ridge Parkway sunrise run",
      "Cherohala Skyway",
      "Fontana Lake overlook lunch stop",
    ],
    itinerary: [
      { day: 1, title: "Arrival & Bike Handover", description: "Meet MK Rider in Maryville, TN. Gear check, route briefing, welcome dinner." },
      { day: 2, title: "Cherohala Skyway", description: "50 miles of high-elevation sweepers to warm up the tires and the group." },
      { day: 3, title: "Tail of the Dragon", description: "The main event. Multiple runs through the 318 curves with photo stops at Deals Gap." },
      { day: 4, title: "Blue Ridge Parkway", description: "Ridge-top cruising, waterfall hikes, and the best BBQ within a hundred miles." },
      { day: 5, title: "Fontana Lake & Send-off", description: "A relaxed final loop and farewell breakfast before drop-off." },
    ],
    includes: [
      "4 nights lodging (cabins & mountain inns)",
      "Motorcycle rental (all classes)",
      "Daily breakfast + 2 group dinners",
      "Support van & mechanic",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Adventure", "Sport-Touring", "Cruiser"],
    startDates: ["2026-09-14", "2026-10-05", "2027-05-10"],
  },
  {
    slug: "transfagarasan",
    name: "Transfăgărășan High Road",
    region: "Carpathian Mountains",
    country: "Romania",
    continent: "Europe",
    difficulty: "Challenging",
    durationDays: 7,
    distanceKm: 980,
    priceUSD: 2650,
    groupSizeMax: 8,
    tone: "blood",
    tagline: "The road that made Top Gear stop the car and start the applause.",
    description:
      "A week through Transylvania's fortress towns and into the Carpathians, climaxing on the Transfăgărășan's hairpins above the clouds. We add the quieter Transalpina for a second alpine crossing and a night near Bran to keep things honest.",
    highlights: [
      "Transfăgărășan's 90+ hairpins",
      "Transalpina, Romania's highest paved road",
      "Bran & Peleș Castle stopovers",
      "Vidraru Dam viewpoint",
    ],
    itinerary: [
      { day: 1, title: "Bucharest Arrival", description: "Gear check and briefing in Bucharest, welcome dinner in the old town." },
      { day: 2, title: "Into Transylvania", description: "Ride north through rolling farmland toward Brașov." },
      { day: 3, title: "Bran & Peleș", description: "Castle stops and a warm-up ride into the foothills." },
      { day: 4, title: "Transfăgărășan", description: "The full climb over Bâlea Lake, with time for photos at every hairpin that demands one." },
      { day: 5, title: "Transalpina", description: "A second, quieter high-altitude crossing through pine forest and open ridgeline." },
      { day: 6, title: "Sibiu & Free Ride", description: "Medieval Sibiu as a base, with an optional loop for those who aren't done yet." },
      { day: 7, title: "Return to Bucharest", description: "Relaxed ride back with a final group dinner." },
    ],
    includes: [
      "6 nights lodging (guesthouses & one castle-adjacent stay)",
      "Motorcycle rental (all classes)",
      "Daily breakfast + 3 group dinners",
      "Support van & mechanic",
      "Border and permit handling",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Adventure", "Sport-Touring"],
    startDates: ["2026-09-01", "2027-06-14"],
  },
  {
    slug: "stelvio-pass",
    name: "Stelvio Pass & Dolomites Loop",
    region: "Italian Alps",
    country: "Italy",
    continent: "Europe",
    difficulty: "Expert",
    durationDays: 8,
    distanceKm: 1120,
    priceUSD: 3190,
    groupSizeMax: 6,
    tone: "ember",
    tagline: "48 hairpins to the roof of the Eastern Alps, twice.",
    description:
      "Our most technical route: the Stelvio's 48 numbered hairpins, the Dolomites' Sella Ronda, and the Passo Giau, strung together with espresso stops and rifugio lunches. Kept to a small group of six because this road doesn't forgive a crowd.",
    highlights: [
      "Stelvio Pass, 2,757m",
      "Sella Ronda dolomite loop",
      "Passo Giau",
      "Lake Como coastal run",
    ],
    itinerary: [
      { day: 1, title: "Milan Arrival", description: "Bike handover near Lake Como, evening briefing." },
      { day: 2, title: "Lake Como to Bormio", description: "Coastal roads into the foothills." },
      { day: 3, title: "Stelvio Pass", description: "All 48 hairpins, both directions if legs allow." },
      { day: 4, title: "Into the Dolomites", description: "Transfer ride toward Corvara through smaller alpine passes." },
      { day: 5, title: "Sella Ronda", description: "The full dolomite loop: Gardena, Sella, Pordoi, Campolongo." },
      { day: 6, title: "Passo Giau", description: "One of the most photographed passes in the Alps, with a rifugio lunch at the top." },
      { day: 7, title: "Free Ride Day", description: "Optional bonus passes for the group, or a rest day in Cortina." },
      { day: 8, title: "Return to Milan", description: "Final ride back with a closing dinner." },
    ],
    includes: [
      "7 nights lodging (alpine hotels & one rifugio night)",
      "Motorcycle rental (sport & adventure)",
      "Daily breakfast + 3 group dinners",
      "Support van & mechanic",
      "Mountain pass permits where required",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Sport", "Adventure"],
    startDates: ["2026-08-24", "2027-07-05"],
  },
  {
    slug: "route-66",
    name: "Route 66 Coast to Coast",
    region: "Chicago to Santa Monica",
    country: "USA",
    continent: "North America",
    difficulty: "Easy",
    durationDays: 12,
    distanceKm: 3940,
    priceUSD: 4450,
    groupSizeMax: 10,
    tone: "slate",
    tagline: "The Mother Road, start to finish, no interstate shortcuts.",
    description:
      "Twelve days from Chicago to the Santa Monica pier on the original Route 66 alignment wherever it survives. Diners, ghost towns, the Cadillac Ranch, and enough desert horizon to reset a year of city living.",
    highlights: [
      "St. Louis Gateway Arch",
      "Cadillac Ranch, Texas",
      "Petrified Forest & Painted Desert",
      "Santa Monica Pier finish line",
    ],
    itinerary: [
      { day: 1, title: "Chicago Send-off", description: "Bike handover and a ceremonial start at the Route 66 sign." },
      { day: 2, title: "Into Missouri", description: "St. Louis Arch and the first taste of the open road." },
      { day: 4, title: "Oklahoma & Texas Panhandle", description: "Cadillac Ranch and long, flat, glorious miles." },
      { day: 6, title: "New Mexico High Desert", description: "Albuquerque and the Santa Fe detour for those who want it." },
      { day: 8, title: "Arizona", description: "Petrified Forest, Painted Desert, Grand Canyon side trip." },
      { day: 10, title: "Mojave Crossing", description: "The long desert stretch into California." },
      { day: 12, title: "Santa Monica Pier", description: "The end of the road, literally, with a finish-line group photo." },
    ],
    includes: [
      "11 nights lodging (motels with character)",
      "Motorcycle rental (cruiser & touring)",
      "Daily breakfast + 4 group dinners",
      "Support van & mechanic",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Cruiser", "Touring"],
    startDates: ["2026-10-02", "2027-04-18"],
  },
  {
    slug: "lofoten-nordkapp",
    name: "Lofoten & Nordkapp Midnight Sun",
    region: "Arctic Norway",
    country: "Norway",
    continent: "Europe",
    difficulty: "Challenging",
    durationDays: 9,
    distanceKm: 1560,
    priceUSD: 3890,
    groupSizeMax: 6,
    tone: "rust",
    tagline: "Ride to the top of Europe under a sun that never sets.",
    description:
      "Fjords, fishing villages built on stilts, and a final run to the North Cape under 24-hour daylight. This one is about scenery more than curves, small groups, and a genuine sense of having ridden somewhere few people go.",
    highlights: [
      "Lofoten Islands fishing villages",
      "Arctic Circle crossing",
      "North Cape (Nordkapp) at midnight",
      "Coastal ferry crossings",
    ],
    itinerary: [
      { day: 1, title: "Bodø Arrival", description: "Gear check and ferry to the Lofoten Islands." },
      { day: 2, title: "Lofoten Islands", description: "Two days riding between fishing villages and fjord viewpoints." },
      { day: 4, title: "Back to the Mainland", description: "Ferry crossing and a ride north along the coast." },
      { day: 6, title: "Arctic Circle", description: "Crossing the line, with the traditional roadside photo." },
      { day: 8, title: "Nordkapp", description: "The final push to the North Cape, timed for midnight sun." },
      { day: 9, title: "Alta Send-off", description: "Relaxed morning and farewell breakfast before drop-off." },
    ],
    includes: [
      "8 nights lodging (fjord-side inns & one cabin stay)",
      "Motorcycle rental (adventure)",
      "Daily breakfast + 3 group dinners",
      "Support van & mechanic",
      "All ferry crossings",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Adventure"],
    startDates: ["2027-06-20"],
  },
  {
    slug: "ha-giang-loop",
    name: "Hà Giang Loop",
    region: "Northern Vietnam Highlands",
    country: "Vietnam",
    continent: "Asia",
    difficulty: "Challenging",
    durationDays: 6,
    distanceKm: 350,
    priceUSD: 1590,
    groupSizeMax: 10,
    tone: "ember",
    tagline: "Karst peaks, terrace farms, and the Mã Pí Lèng Pass.",
    description:
      "Slower speeds, bigger views. Six days looping through limestone karst country on the northern border, staying in homestays with H'mong and Tày families, with the Mã Pí Lèng Pass as the scenic high point.",
    highlights: [
      "Mã Pí Lèng Pass switchbacks",
      "Đồng Văn Karst Plateau",
      "Local homestays",
      "Nho Quế River viewpoint",
    ],
    itinerary: [
      { day: 1, title: "Hà Giang City", description: "Bike handover and a short shakedown ride." },
      { day: 2, title: "Quản Bạ to Yên Minh", description: "Heaven's Gate viewpoint and rolling limestone hills." },
      { day: 3, title: "Đồng Văn Plateau", description: "Karst plateau riding and the old quarter market town." },
      { day: 4, title: "Mã Pí Lèng Pass", description: "The signature pass above the Nho Quế River, with a boat-ride option." },
      { day: 5, title: "Back through Du Già", description: "Quieter back roads and terrace-farm scenery." },
      { day: 6, title: "Hà Giang Send-off", description: "Final breakfast and drop-off." },
    ],
    includes: [
      "5 nights lodging (homestays & guesthouses)",
      "Semi-automatic motorcycle rental",
      "Daily breakfast + 3 group dinners",
      "Support van & mechanic",
      "Local guide fluent in regional dialects",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Semi-Automatic 150cc-175cc"],
    startDates: ["2026-09-20", "2026-11-08", "2027-02-14"],
  },
  {
    slug: "atlas-mountains",
    name: "Atlas Mountains & Sahara Gateway",
    region: "High Atlas",
    country: "Morocco",
    continent: "Africa",
    difficulty: "Moderate",
    durationDays: 8,
    distanceKm: 1340,
    priceUSD: 2790,
    groupSizeMax: 8,
    tone: "blood",
    tagline: "From Marrakech's medina to the edge of the Sahara.",
    description:
      "High mountain passes, kasbahs, and a night under Sahara stars. We cross the Tizi n'Tichka pass, wind through the Dades Gorge, and finish with a camel-adjacent desert camp before returning through the Ourika Valley.",
    highlights: [
      "Tizi n'Tichka pass",
      "Dades & Todra Gorges",
      "Sahara desert camp (Erg Chebbi)",
      "Marrakech medina finish",
    ],
    itinerary: [
      { day: 1, title: "Marrakech Arrival", description: "Bike handover, medina walk, welcome dinner." },
      { day: 2, title: "Tizi n'Tichka Pass", description: "The main crossing of the High Atlas toward Ouarzazate." },
      { day: 3, title: "Kasbah Country", description: "Aït Benhaddou and the kasbah route." },
      { day: 4, title: "Dades Gorge", description: "Switchbacks into red rock canyon country." },
      { day: 5, title: "Todra Gorge", description: "Narrow canyon riding and a swim stop." },
      { day: 6, title: "Erg Chebbi Desert Camp", description: "Riding to the dunes, camel transfer, night under the stars." },
      { day: 7, title: "Return via Ourika Valley", description: "Waterfalls and a slower ride back toward Marrakech." },
      { day: 8, title: "Marrakech Send-off", description: "Final breakfast and farewell." },
    ],
    includes: [
      "7 nights lodging (riads, kasbahs & desert camp)",
      "Motorcycle rental (adventure)",
      "Daily breakfast + 4 group dinners",
      "Support van & mechanic",
      "Camel transfer & desert camp fees",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Adventure", "Dual-Sport"],
    startDates: ["2026-10-17", "2027-03-06"],
  },
  {
    slug: "pacific-coast-highway",
    name: "Pacific Coast Highway",
    region: "California Coast",
    country: "USA",
    continent: "North America",
    difficulty: "Easy",
    durationDays: 6,
    distanceKm: 870,
    priceUSD: 2190,
    groupSizeMax: 10,
    tone: "slate",
    tagline: "Big Sur cliffs on one side, open ocean on the other.",
    description:
      "A relaxed six days from San Francisco to San Diego on Highway 1, with Big Sur's cliffside curves as the centerpiece. Easy pace, big coastline, good for riders who want scenery over technical roads.",
    highlights: [
      "Golden Gate Bridge departure",
      "Big Sur & Bixby Bridge",
      "Hearst Castle stop",
      "Malibu coastline finish",
    ],
    itinerary: [
      { day: 1, title: "San Francisco Arrival", description: "Bike handover and a warm-up ride across the Golden Gate." },
      { day: 2, title: "Monterey & Carmel", description: "Coastal cruising down to Big Sur's edge." },
      { day: 3, title: "Big Sur", description: "The full cliffside stretch, with stops at Bixby Bridge and McWay Falls." },
      { day: 4, title: "Hearst Castle & San Luis Obispo", description: "A slower day with a castle tour and wine country detour." },
      { day: 5, title: "Santa Barbara to Malibu", description: "Open coastline riding into greater LA." },
      { day: 6, title: "San Diego Send-off", description: "Final coastal miles and farewell breakfast." },
    ],
    includes: [
      "5 nights lodging (coastal inns)",
      "Motorcycle rental (all classes)",
      "Daily breakfast + 2 group dinners",
      "Support van & mechanic",
      "Digital MK Rider Portal access — road book, prep guide & GPX files",
    ],
    bikeOptions: ["Cruiser", "Sport-Touring", "Adventure"],
    startDates: ["2026-09-07", "2027-05-01"],
  },
  {
    slug: "spain-portugal",
    name: "Spain & Portugal: Castles, Coast & Sierra",
    region: "Iberian Peninsula",
    country: "Spain & Portugal",
    continent: "Europe",
    difficulty: "Moderate",
    durationDays: 9,
    distanceKm: 2534,
    priceUSD: 3450,
    groupSizeMax: 10,
    tone: "rust",
    tagline: "Nine days, two countries, and every kind of road in between.",
    description:
      "Our flagship road book: a full loop from Madrid through walled medieval cities, over three mountain ranges, along the Atlantic to Lisbon, and back through Andalusia's white villages and olive seas. This is the tour with the most complete route notes we run — turn-by-turn, kilometer-by-kilometer, the same road book format our guides have refined for over 40 years on these roads.",
    highlights: [
      "Segovia's Roman aqueduct & Ávila's medieval walls",
      "El Escorial monastery and the biker meetup at Puerto de la Cruz Verde",
      "Lisbon's Belém district and the 25 de Abril bridge",
      "Sintra's Pena Palace and Cabo da Roca, mainland Europe's westernmost point",
      "Aracena's Iberian ham country",
      "Ronda's Puente Nuevo gorge and a night in a five-century castle-hotel",
      "The Alhambra from Granada's Mirador de San Nicolás",
      "Don Quixote's windmills at Consuegra and the three-culture city of Toledo",
    ],
    itinerary: [
      { day: 1, title: "Arrival in Madrid", description: "Bike handover, gear check, and a welcome dinner in the city center." },
      { day: 2, title: "Madrid → Segovia → Ávila", description: "Sierra de Guadarrama passes, the Roman aqueduct, and a night inside Ávila's walls. 230 km." },
      { day: 3, title: "Ávila → Trujillo", description: "Sierra de Gredos peaks, Monfragüe National Park, and a medieval Plaza Mayor. 286 km." },
      { day: 4, title: "Trujillo → Lisbon", description: "Crossing into Portugal, dehesa oak country, and the Vasco da Gama bridge into Lisbon. 431 km." },
      { day: 5, title: "Lisbon Loop: Sintra & Cabo da Roca", description: "Optional riding day to Pena Palace and the westernmost point of continental Europe. 82 km." },
      { day: 6, title: "Lisbon → Aracena", description: "Back across the border through Alentejo and into Spain's Iberian ham country. 321 km." },
      { day: 7, title: "Aracena → Sevilla → Ronda → Monda", description: "Sevilla's cathedral, Ronda's gorge-spanning bridge, and a night in a castle-hotel. 290 km." },
      { day: 8, title: "Monda → Granada → Cazorla", description: "Costa del Sol views, the Alhambra from Mirador San Nicolás, and Jaén's endless olive groves. 401 km." },
      { day: 9, title: "Cazorla → Toledo → Madrid", description: "Cazorla's national park, Don Quixote's windmills, Toledo, and back to Madrid. 493 km." },
    ],
    includes: [
      "8 nights lodging (medieval walled cities, a castle-hotel, riverside Lisbon)",
      "Motorcycle rental (all classes)",
      "Daily breakfast + welcome & farewell dinners",
      "Support van & mechanic",
      "English-speaking guide for all 9 days",
      "Digital MK Rider Portal access — full kilometer-by-kilometer road book, prep guide & GPX files",
    ],
    bikeOptions: ["Adventure", "Sport-Touring", "Touring"],
    startDates: ["2026-10-24", "2027-05-03"],
    roadbook: [
      {
        day: 1,
        title: "Arrival in Madrid",
        totalKm: 0,
        duration: "—",
        narrative:
          "Madrid packs every region of Spain into one city — the Prado, the Reina Sofía (home to Picasso's Guernica), the Royal Palace, and a tapas culture built around hopping between a half-dozen bars in one night. Settle in, meet the group, and get the bike dialed in before the road book starts tomorrow.",
        legs: [],
        pois: [
          {
            name: "Madrid",
            description:
              "Spain's capital holds the country's biggest concentration of world-class museums along the so-called Paseo del Arte, plus the Royal Palace, Gran Vía, and a tapas scene built for slow, unhurried nights.",
          },
        ],
      },
      {
        day: 2,
        title: "Madrid → Segovia → Ávila",
        totalKm: 230,
        duration: "≈3h30 riding",
        narrative:
          "The Sierra de Guadarrama is the warm-up: excellent asphalt, castles, and old ski towns strung together by hairpins. The descent from Puerto de Navacerrada includes the Siete Revueltas, a stretch of horquilla (hairpin) curves famous from the Vuelta a España — mind oncoming traffic before committing to the exit. We stop in Segovia for its 2,000-year-old Roman aqueduct and the Alcázar, then cross the Sierra again at Puerto de Guadarrama before an optional detour to El Escorial, the largest granite building on Earth. The day ends inside Ávila's fully intact medieval walls.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Hotel, Madrid", time: "—", note: "Departure" },
          { cumulativeKm: 35, legKm: 35, road: "M-104 / M-109", place: "Manzanares el Real", time: "33'", note: "Castle stop" },
          { cumulativeKm: 61, legKm: 26, road: "CL-608 / 601", place: "Puerto de Navacerrada", time: "25'", note: "Hairpin curves (Siete Revueltas)" },
          { cumulativeKm: 98, legKm: 37, road: "CL-601", place: "Segovia", time: "35'", note: "Roman aqueduct & old town" },
          { cumulativeKm: 136, legKm: 38, road: "N-603 / N-VI", place: "Puerto de Guadarrama", time: "30'", note: "Speed cameras on the climb and descent" },
          { cumulativeKm: 166, legKm: 30, road: "M-600", place: "El Escorial", time: "35'", note: "Monastery photo stop" },
          { cumulativeKm: 174, legKm: 8, road: "M-505", place: "Puerto de la Cruz Verde", time: "13'", note: "Local biker meetup spot on weekends" },
          { cumulativeKm: 227, legKm: 53, road: "CL-505", place: "Ávila", time: "43'", note: "Walled medieval city" },
          { cumulativeKm: 230, legKm: 3, road: "—", place: "Hotel, Ávila", time: "6'", note: "Overlooking the city walls" },
        ],
        pois: [
          {
            name: "Segovia",
            description:
              "At the foot of the Sierra de Guadarrama, Segovia's headline act is a Roman aqueduct built without mortar nearly 2,000 years ago, still standing over the old town. The fairy-tale Alcázar nearby is widely said to have inspired Walt Disney's animated castles.",
          },
          {
            name: "El Escorial",
            description:
              "Built for Philip II in the 16th century, when Spain and Portugal ruled territory on every inhabited continent, El Escorial functioned as monastery, royal palace, and seat of government at once — the era's White House, Capitol, and cathedral rolled into one enormous granite complex.",
          },
          {
            name: "Ávila",
            description:
              "One of Europe's best-preserved medieval walled cities, with an unbroken ring of ramparts around narrow streets, churches, and a hotel perched on a hill just outside the walls with views over the whole skyline at night.",
          },
        ],
      },
      {
        day: 3,
        title: "Ávila → Trujillo",
        totalKm: 286,
        duration: "≈5h riding",
        narrative:
          "Into the Sierra de Gredos, the highest range in central Spain, on some of the least-known mountain passes in the country — excellent asphalt, tight radius curves, and a real chance of wild mountain goats on the road. Puerto de la Peña Negra is popular with paragliders launching over the plains of Castile below. The route drops into Extremadura through Monfragüe National Park, home to the largest population of black storks and griffon vultures in Europe, before finishing in Trujillo, a walled hill town crowned by a castle and one of Spain's most beautiful main squares.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Ávila", time: "—", note: "Departure" },
          { cumulativeKm: 29, legKm: 29, road: "AV-900", place: "Navalmoral", time: "30'", note: "Sweeping curves" },
          { cumulativeKm: 65, legKm: 36, road: "AV-905", place: "Venta Rasquilla", time: "40'", note: "Crossroads" },
          { cumulativeKm: 82, legKm: 17, road: "AV-941", place: "Hoyo del Espino", time: "18'", note: "Gredos viewpoints" },
          { cumulativeKm: 104, legKm: 22, road: "AV-932", place: "Puerto de la Peña Negra", time: "28'", note: "Narrow, uneven surface — watch for wild goats" },
          { cumulativeKm: 119, legKm: 15, road: "AV-922", place: "Piedrahita", time: "25'", note: "Detour, road 110" },
          { cumulativeKm: 204, legKm: 85, road: "N-110", place: "Plasencia", time: "1h15'", note: "Long open stretch" },
          { cumulativeKm: 236, legKm: 32, road: "EX-208", place: "Monfragüe", time: "35'", note: "National park" },
          { cumulativeKm: 286, legKm: 50, road: "EX-208", place: "Trujillo", time: "43'", note: "Hotel in the old town" },
        ],
        pois: [
          {
            name: "Sierra de Gredos",
            description:
              "The mountainous core of central Spain, with the widest-radius, best-surfaced curves of the whole trip — and a real chance of spotting wild Gredos ibex crossing the road.",
          },
          {
            name: "Monfragüe National Park",
            description:
              "Named from the Latin for \"rugged mountain,\" Monfragüe's cliffs over the Tagus river hold Europe's largest population of griffon vultures and black storks, with El Salto del Gitano among the best viewpoints for both.",
          },
          {
            name: "Trujillo",
            description:
              "A walled medieval town crowned by a castle, with one of Spain's most photogenic main squares — arcaded, noble, and watched over by an equestrian statue of Francisco Pizarro, the conquistador born here.",
          },
        ],
      },
      {
        day: 4,
        title: "Trujillo → Lisbon",
        totalKm: 431,
        duration: "≈6h riding",
        narrative:
          "The longest transfer day, and the one with the least drama: dehesa oak-woodland country all the way to the Portuguese border, no customs stop required. Whitewashed towns and castles punctuate open, easy roads before the ride into Lisbon over the Vasco da Gama bridge, one of the longest in Europe, and a pass by Praça do Comércio and the 25 de Abril bridge — a near twin of San Francisco's Golden Gate.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Trujillo", time: "—", note: "Departure" },
          { cumulativeKm: 47, legKm: 47, road: "N-521", place: "Cáceres", time: "35'", note: "Skirting the city" },
          { cumulativeKm: 139, legKm: 92, road: "N-521", place: "Valencia de Alcántara", time: "1h15'", note: "Portugal border — no stop required" },
          { cumulativeKm: 234, legKm: 95, road: "IC-13", place: "Ponte de Sor", time: "1h20'", note: "Southern bypass" },
          { cumulativeKm: 299, legKm: 65, road: "N-521", place: "Coruche", time: "55'", note: "Through town" },
          { cumulativeKm: 384, legKm: 85, road: "Toll road", place: "Vasco da Gama Bridge", time: "60'", note: "Crossing the Tagus" },
          { cumulativeKm: 414, legKm: 30, road: "Urban", place: "Lisbon", time: "30'", note: "City crossing" },
          { cumulativeKm: 418, legKm: 4, road: "Urban", place: "Torre de Belém", time: "5'", note: "Photo stop" },
          { cumulativeKm: 431, legKm: 13, road: "Urban", place: "Hotel, Oeiras", time: "20'", note: "At the mouth of the Tagus" },
        ],
        pois: [
          {
            name: "Crossing into Portugal",
            description:
              "No customs stop, no paperwork — the route simply changes surface texture and roadside architecture. Dehesa woodland (cork oak and holm oak, grazed by black Iberian pigs) carries the whole crossing.",
          },
          {
            name: "Lisbon",
            description:
              "Built across seven hills at the mouth of the Tagus, Lisbon pairs the hilltop Alfama district — the best vantage over the whole city — with a lively, walkable center. Torre de Belém honors the age of Portuguese exploration, and the 25 de Abril bridge offers a view nearly identical to San Francisco's Golden Gate.",
          },
        ],
      },
      {
        day: 5,
        title: "Lisbon Loop: Sintra & Cabo da Roca",
        totalKm: 82,
        duration: "≈2h riding — optional",
        narrative:
          "A short, scenic loop for riders who don't want a full day off the bike — everyone else can spend the day exploring Lisbon on foot instead. Cabo da Roca marks the westernmost point of mainland Europe, with cliffs looking out toward a horizon that, on a clear day, feels like it curves toward the Americas. Sintra, the former summer residence of Portugal's royalty, is crowned by the candy-colored Pena Palace and laced with fairy-tale estates like the Quinta da Regaleira and its initiation well.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Hotel, Oeiras", time: "—", note: "Departure" },
          { cumulativeKm: 12, legKm: 12, road: "N-6", place: "Cascais", time: "—", note: "Urban" },
          { cumulativeKm: 18, legKm: 6, road: "N-247", place: "Cabo Raso", time: "9'", note: "River-mouth views" },
          { cumulativeKm: 34, legKm: 16, road: "N-247", place: "Cabo da Roca", time: "30'", note: "Narrow, windy — westernmost point of mainland Europe" },
          { cumulativeKm: 53, legKm: 19, road: "N-247", place: "Sintra", time: "30'", note: "Curves and traffic — Pena Palace" },
          { cumulativeKm: 79, legKm: 26, road: "A16 / A5", place: "Oeiras", time: "25'", note: "Motorway" },
          { cumulativeKm: 82, legKm: 3, road: "Urban", place: "Hotel, Oeiras", time: "5'", note: "Back to base" },
        ],
        pois: [
          {
            name: "Cabo da Roca",
            description:
              "The westernmost point of the European mainland. Certificates confirming you've stood at the edge of the continent are available at the visitor center for anyone who wants the proof.",
          },
          {
            name: "Sintra",
            description:
              "A UNESCO-listed cultural landscape in the hills above Lisbon, favored for centuries by Portuguese royalty for its cooler mountain climate. Pena Palace crowns the highest point in eye-searing color; the Quinta da Regaleira's initiation well and tunnels add a genuinely strange, storybook layer underneath.",
          },
        ],
      },
      {
        day: 6,
        title: "Lisbon → Aracena",
        totalKm: 321,
        duration: "≈3h40 riding",
        narrative:
          "Back across the Tagus and south through the Alentejo, Portugal's breadbasket, before re-crossing into Spain at Rosal de la Frontera. The day ends in the Sierra de Aracena, one of Spain's least-visited ranges and the source of the country's most prized Iberian ham — acorn-fed pata negra pigs still roam free through the dehesa here.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Hotel, Oeiras", time: "—", note: "Departure" },
          { cumulativeKm: 13, legKm: 13, road: "Urban", place: "25 de Abril Bridge", time: "20'", note: "Crossing the Tagus" },
          { cumulativeKm: 135, legKm: 122, road: "A2 motorway", place: "Toll exit 10", time: "1h12'", note: "—" },
          { cumulativeKm: 187, legKm: 52, road: "N-121", place: "Beja", time: "50'", note: "Exterior" },
          { cumulativeKm: 250, legKm: 63, road: "IP-8", place: "Rosal de la Frontera", time: "52'", note: "Portugal / Spain border" },
          { cumulativeKm: 299, legKm: 49, road: "N-433", place: "Jabugo", time: "40'", note: "Iberian ham country" },
          { cumulativeKm: 321, legKm: 22, road: "N-433", place: "Aracena", time: "25'", note: "Hotel with hilltop views" },
        ],
        pois: [
          {
            name: "Sierra de Aracena",
            description:
              "One of Spain's most overlooked mountain ranges. Free-roaming pata negra pigs graze the dehesa here on acorns, producing the jamón ibérico that Spain considers its finest — along with excellent chorizo, salchichón, and morcilla.",
          },
          {
            name: "Aracena",
            description:
              "The range's largest town, topped by a hilltop castle-church and home to the Cueva de las Maravillas, one of Andalusia's most decorated cave systems. Our hotel sits at the top of town with views over the whole valley.",
          },
        ],
      },
      {
        day: 7,
        title: "Aracena → Sevilla → Ronda → Monda",
        totalKm: 290,
        duration: "≈4h riding",
        narrative:
          "Sevilla gets a proper stop: the world's largest Gothic cathedral, built on top of a mosque whose minaret survives as the Giralda bell tower, and the Torre del Oro, the old river watchtower Magellan and Elcano sailed past when they set off on the first circumnavigation of the globe. From there the route climbs into the Sierra de las Nieves and the white villages of Málaga province, ending in Ronda — where bullfighting's modern rules were first written — and its 18th-century Puente Nuevo spanning a gorge that split the town in two. The day finishes at a genuine five-century castle in the village of Monda, converted into a boutique hotel; the entrance drive has a steep, sharp-angled approach worth taking slowly.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Hotel, Aracena", time: "—", note: "Departure" },
          { cumulativeKm: 90, legKm: 90, road: "N-433", place: "Sevilla", time: "1h15'", note: "Cathedral & Torre del Oro stop" },
          { cumulativeKm: 122, legKm: 32, road: "A-376", place: "Utrera", time: "30'", note: "Exterior" },
          { cumulativeKm: 142, legKm: 20, road: "A-375", place: "Coronil", time: "15'", note: "Exterior" },
          { cumulativeKm: 165, legKm: 23, road: "A-375", place: "Puerto Serrano", time: "20'", note: "Junction 375/384" },
          { cumulativeKm: 225, legKm: 60, road: "A-384", place: "Ronda", time: "50'", note: "Puente Nuevo stop" },
          { cumulativeKm: 290, legKm: 65, road: "A-386", place: "Monda", time: "1h15'", note: "Castle-hotel — steep, sharp-angled entrance" },
        ],
        pois: [
          {
            name: "Sevilla",
            description:
              "Andalusia's capital, where flamenco was born in the streets. The Torre del Oro guarded the river port where treasure fleets returned from the Americas — and where Magellan and Elcano departed on the first voyage around the world. The cathedral, built over a former mosque, is the largest Gothic church on Earth.",
          },
          {
            name: "Ronda",
            description:
              "One of Spain's oldest bullrings sits here, where the modern rules of bullfighting on foot were first codified. The 18th-century Puente Nuevo bridges El Tajo gorge, connecting the two halves of a town long used as a smugglers' hideout in the surrounding sierra.",
          },
          {
            name: "Castillo de Monda",
            description:
              "A five-centuries-old castle converted into a boutique hotel above a whitewashed Málaga village, every room shaped differently by the building's long history. Dinner is a regional tasting menu built around the Chef's picks.",
          },
        ],
      },
      {
        day: 8,
        title: "Monda → Granada → Cazorla",
        totalKm: 401,
        duration: "≈5h30 riding",
        narrative:
          "A coastal run past Málaga before turning back inland and climbing to Granada, the last city held by the Moors before Spain's 1492 reconquest, and one of the last stops on the tour with a true must-see: the Alhambra, viewed here from the Mirador de San Nicolás — the spot where, reportedly, a visiting Bill Clinton called the sunset the most beautiful he'd ever seen. From Granada the route crosses into Jaén province, home to the largest concentration of olive groves on Earth, before finishing in Cazorla, gateway to Spain's biggest protected natural park.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Castillo de Monda", time: "—", note: "Departure" },
          { cumulativeKm: 45, legKm: 45, road: "A-355", place: "Málaga", time: "40'", note: "Exterior" },
          { cumulativeKm: 122, legKm: 77, road: "Motorway", place: "Almuñécar", time: "1h", note: "Exit 920" },
          { cumulativeKm: 135, legKm: 13, road: "A-4050", place: "Otívar", time: "25'", note: "Narrow" },
          { cumulativeKm: 200, legKm: 65, road: "A-4050", place: "Granada", time: "1h20'", note: "Mirador de San Nicolás" },
          { cumulativeKm: 291, legKm: 91, road: "A-44", place: "Jaén", time: "1h", note: "—" },
          { cumulativeKm: 350, legKm: 59, road: "A-316", place: "Baeza", time: "40'", note: "Motorway through olive groves" },
          { cumulativeKm: 365, legKm: 15, road: "N-322", place: "Torreperogil", time: "10'", note: "Olive groves" },
          { cumulativeKm: 401, legKm: 36, road: "A-319", place: "Cazorla", time: "30'", note: "Hotel" },
        ],
        pois: [
          {
            name: "Granada",
            description:
              "The last city reconquered from Moorish rule in 1492 — the same year Columbus reached the Americas. The Alhambra and Generalife form the largest and most refined surviving palace complex of Moorish Europe; the Mirador de San Nicolás across the valley is the best (and most famous) viewpoint over it.",
          },
          {
            name: "Jaén's olive seas",
            description:
              "Leaving Granada, the hills turn into an unbroken grid of olive trees for over a hundred kilometers — the highest concentration of olive oil production anywhere on the planet.",
          },
          {
            name: "Cazorla",
            description:
              "A historic hill town with two castles, and the gateway to the Sierras de Cazorla, Segura y Las Villas Natural Park — the largest protected area in Spain and the source of the Guadalquivir river we crossed back in Sevilla.",
          },
        ],
      },
      {
        day: 9,
        title: "Cazorla → Toledo → Madrid",
        totalKm: 493,
        duration: "≈5h riding",
        narrative:
          "The last day opens inside Cazorla's national park — pine and oak forest thick with deer, wild boar, and Spanish ibex, so keep speeds moderate through the reserve. The route then flattens into La Mancha, the plains that inspired Cervantes's Don Quixote, with a stop at the windmills of Consuegra that the errant knight famously mistook for giants. A final stop in Toledo, the \"city of three cultures\" where Muslims, Jews, and Christians lived side by side for centuries, viewed from the Parador overlook before the last run back into Madrid.",
        legs: [
          { cumulativeKm: 0, legKm: 0, road: "—", place: "Cazorla", time: "—", note: "Departure" },
          { cumulativeKm: 13, legKm: 13, road: "A-319", place: "Puerto de las Palomas", time: "22'", note: "Very winding" },
          { cumulativeKm: 53, legKm: 40, road: "A-319", place: "Coto Ríos", time: "1h", note: "National park — wildlife on the road" },
          { cumulativeKm: 75, legKm: 22, road: "A-319", place: "Presa del Tranco", time: "37'", note: "Watch for deer & boar" },
          { cumulativeKm: 207, legKm: 132, road: "CM-3127", place: "Valdepeñas", time: "1h15'", note: "Vineyards" },
          { cumulativeKm: 297, legKm: 90, road: "A-4", place: "Consuegra", time: "1h", note: "Don Quixote's windmills" },
          { cumulativeKm: 365, legKm: 68, road: "N-401", place: "Toledo", time: "40'", note: "Panoramic stop at the Parador" },
          { cumulativeKm: 455, legKm: 90, road: "A-42", place: "Madrid", time: "1h", note: "Motorway ring road" },
          { cumulativeKm: 493, legKm: 38, road: "M-30 / A-1", place: "San Agustín de Guadalix", time: "35'", note: "Hotel — journey's end" },
        ],
        pois: [
          {
            name: "La Mancha",
            description:
              "Flat, endless, and covered in vineyards — the region that produces more wine than anywhere else in Spain, and the setting Cervantes chose for Don Quixote's misadventures against windmills he mistook for giants.",
          },
          {
            name: "Consuegra",
            description:
              "The best-preserved cluster of La Mancha's windmills sits on a ridge above town, with a medieval castle behind them and panoramic views across the plain in every direction.",
          },
          {
            name: "Toledo",
            description:
              "Wrapped in a bend of the Tagus that made it naturally defensible for centuries, Toledo earned its \"city of three cultures\" reputation from centuries of Muslims, Jews, and Christians living in close proximity. The Alcázar, cathedral, and old town are all visible in one sweep from the Parador overlook.",
          },
        ],
      },
    ],
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug);
}
