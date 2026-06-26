// FORMA BRISTOL — venue dataset
// Source: "FORMA BRISTOL FULL EVENT PROGRAMME" Google Doc
const VENUES = [
  {
    n: 1, key: "bristol_packet", name: "Bristol Packet",
    lat: 51.4479, lng: -2.5958,
    day: "Saturday", date: "Jun 27", time: "11:00 – 13:00",
    title: "Welcome Boat Ride",
    desc: "Opening welcome cruise along Bristol's Floating Harbour. Meet at the Bristol Packet jetty, Wapping Wharf.",
    detail: "Max capacity: 50 pax. Deco & signage on board.",
    lineup: [],
    maps: "https://maps.app.goo.gl/rmZgW3h2hFGY8Nfg8"
  },
  {
    n: 2, key: "old_market_assembly", name: "Old Market Assembly",
    lat: 51.4569, lng: -2.5791,
    day: "Saturday", date: "Jun 27", time: "16:00 – 20:00",
    title: "Forma Opening",
    desc: "The official Forma Bristol opening. Doors at 16:00, full afternoon music programme.",
    detail: "Capacity ~80–100. Forma Radio recorded set. CDJ 3000s + Xone 96.",
    lineup: ["16:00 – 18:00 — Chiedza", "18:00 – 20:00 — Sofa Sofa"],
    maps: "https://maps.app.goo.gl/SaTX2RkVjiCuqWLe8"
  },
  {
    n: 3, key: "boxing_gym", name: "The Boxing Gym",
    lat: 51.4571, lng: -2.5760,
    day: "Saturday", date: "Jun 27", time: "22:00 – 00:00",
    title: "England vs. Panama — World Cup",
    desc: "World Cup screening presented by KAST. 10 tables x 6 pax booked, free entry for standing.",
    detail: "Last entry 22:00 — arrive early. Max 60 seated.",
    lineup: [],
    maps: "https://maps.app.goo.gl/a99Ds8jswQJaW3679"
  },
  {
    n: 4, key: "fire_ice", name: "Fire & Ice",
    lat: 51.4467, lng: -2.6010,
    day: "Sunday", date: "Jun 28", time: "10:00 – 13:00",
    title: "Wellness Day",
    desc: "Sauna, nature walk and yoga across three rotating groups on the harbourside.",
    detail: "Max capacity 50. Run by Fire & Ice.",
    lineup: [],
    maps: "https://maps.app.goo.gl/oMsszfzgsjBAqMaE7"
  },
  {
    n: 5, key: "wiper_true", name: "Wiper & True Brewery & Tap Room",
    lat: 51.4638, lng: -2.5778,
    day: "Sunday", date: "Jun 28", time: "16:00 – 20:00",
    title: "Sunday BBQ — Food, Music & Beer",
    desc: "Sunday session at the brewery tap room. Food, craft beer and an afternoon music programme.",
    detail: "Capacity ~100. Forma Radio recorded set. Full in-house DJ rig + MiniRig Doppler PA.",
    lineup: ["16:00 – 17:00 — Steven Rice", "17:00 – 18:30 — Rubba", "18:30 – 20:00 — Farhaj"],
    maps: "https://maps.app.goo.gl/QzS8BRQQPji2ZsvH9"
  },
  {
    n: 6, key: "watershed", name: "PopUp HQ — Watershed", hq: true,
    lat: 51.4524, lng: -2.5998,
    day: "Mon · Fri", date: "Jun 29 – Jul 3", time: "Daytime",
    title: "PopUp HQ",
    desc: "Forma's central PopUp HQ at Watershed — the daytime hub for the whole week. Open co-work, opening remarks, JET workshops, demos, talks and the AI + Friends cinema session.",
    detail: "Mon: opening remarks (11:00). Fri: demos/workshops (11:00–14:00) + AI + Friends in Cinema 1 (16:00–18:00, livestreamed).",
    lineup: [],
    maps: "https://maps.app.goo.gl/1BQSHT9NvWQMc6xz5"
  },
  {
    n: 7, key: "goals_bristol_south", name: "Goals Bristol South",
    lat: 51.4308, lng: -2.6190,
    day: "Monday", date: "Jun 29", time: "20:00 – 22:00",
    title: "Football World Cup — presented by JET",
    desc: "5-a-side football, 2 pitches x 10 pax each. Presented by JET.",
    detail: "Max playing capacity 40. Referee + vests provided.",
    lineup: [],
    maps: "https://maps.app.goo.gl/XPQW5qCGX17ptf9s8"
  },
  {
    n: 8, key: "now_studio", name: "Now Studio",
    lat: 51.4660, lng: -2.5770,
    day: "Tuesday", date: "Jun 30", time: "10:00 – 11:00",
    title: "Creative Soundbath",
    desc: "Morning soundbath session. Meet at Now Studio.",
    detail: "Max capacity 25. Run by Now Studio.",
    lineup: [],
    maps: "https://maps.app.goo.gl/ngKNApfSyiRsWmVQ7"
  },
  {
    n: 9, key: "the_island", name: "The Graft @ The Island",
    lat: 51.4548, lng: -2.5960,
    day: "Tuesday", date: "Jun 30", time: "17:00 – 19:00",
    title: "Graffiti Workshop",
    desc: "2-hour graffiti workshop in a former police station — tag design, name boards and stencil spraying. All materials & PPE provided, two pieces to take away.",
    detail: "Max capacity 35.",
    lineup: [],
    maps: "https://maps.app.goo.gl/xWGKrmY2JhGekbDL9"
  },
  {
    n: 10, key: "mickey_zoggs", name: "Mickey Zoggs",
    lat: 51.4605, lng: -2.5870,
    day: "Tuesday", date: "Jun 30", time: "18:00 – 22:00",
    title: "Noods Takeover @ Mickey Zoggs",
    desc: "Boardgames, music and a Noods takeover. Popcorn machine on site.",
    detail: "Forma Radio recorded set. 1210s + CDJ 3000 NXS + DJM A9.",
    lineup: ["18:00 – 19:00 — Cauliflower AM", "19:00 – 20:00 — Muy Muy", "20:00 – 21:00 — Steven Rice", "21:00 – 22:00 — Mayan Soundsystem"],
    maps: "https://maps.app.goo.gl/MEfT6oaCJTNuxBiS6"
  },
  {
    n: 11, key: "leigh_woods", name: "Leigh Woods",
    lat: 51.4542, lng: -2.6391,
    day: "Wednesday", date: "Jul 1", time: "10:00 – 12:00",
    title: "Nature Walk / Hike with Make:Wild",
    desc: "2-hour bespoke guided walk with forest bathing. Meet at Leigh Woods Coffee Co, inside the car park (BS8 3QB).",
    detail: "30–40 participants. Run by Make:Wild. New merch drop here.",
    lineup: [],
    maps: "https://maps.app.goo.gl/LkVe5Z1LCLB78CPr7"
  },
  {
    n: 12, key: "tapps", name: "Tapps Wine Bar",
    lat: 51.4634, lng: -2.6089,
    day: "Wednesday", date: "Jul 1", time: "19:00 – 23:00",
    title: "Vinyls & Wine @ Tapps",
    desc: "Welcome drinks, vinyl selections all night and bites. Whiteladies Road.",
    detail: "Forma Radio recorded set. All-night vinyl set by Admin.",
    lineup: ["19:00 – 23:00 — Admin (all-night vinyl set)"],
    maps: "https://maps.app.goo.gl/nBL7nYqATc7YhTDH7"
  },
  {
    n: 13, key: "underfall_yard", name: "Underfall Yard (SUP)",
    lat: 51.4467, lng: -2.6181,
    day: "Thursday", date: "Jul 2", time: "10:00 – 12:00",
    title: "Kayak / Paddleboarding",
    desc: "2-hour paddleboarding sessions. Meet near the waterside jetty just outside the Cottage Inn, Underfall Yard.",
    detail: "Max capacity 20. Run by SUP Bristol.",
    lineup: [],
    maps: "https://maps.app.goo.gl/GANGdFiYK8SxkJH27"
  },
  {
    n: 14, key: "watershed_playground", name: "Waterside 4 (The Playground) @ Watershed",
    lat: 51.4512, lng: -2.5972,
    day: "Thursday", date: "Jul 2", time: "19:00 – 23:00",
    title: "Cider Tasting + Quiz Night",
    desc: "Cider tasting & local cheese with Wine Orchard, the Forma Pub Quiz guided by Babak, then open decks.",
    detail: "In-house gear: CDJ 3000s & Xone 96.",
    lineup: ["19:00 – 20:00 — Cider tasting (Wine Orchard)", "20:00 – 21:00 — Forma Pub Quiz", "21:00 – 23:00 — Open decks"],
    maps: "https://maps.app.goo.gl/1BQSHT9NvWQMc6xz5"
  },
  {
    n: 15, key: "ai_friends", name: "Watershed (Cinema 1)",
    lat: 51.4521, lng: -2.5991,
    day: "Friday", date: "Jul 3", time: "16:00 – 18:00",
    title: "AI + Friends",
    desc: "We're taking over Watershed's Cinema 1 for an afternoon with Sid, who will teach a friend how to build an app with AI. This one is open to the wider Bristol community. We'll be livestreaming for those who can't make it in person.",
    detail: "",
    lineup: [],
    maps: "https://maps.app.goo.gl/1BQSHT9NvWQMc6xz5"
  },
  {
    n: 16, key: "riverstation", name: "Riverstation",
    lat: 51.4491, lng: -2.5935,
    day: "Friday", date: "Jul 3", time: "19:00 – 22:00",
    title: "Jazz Concert + Community Dinner",
    desc: "Live jazz from Snazzback followed by a community dinner on the harbourside, before heading to the closing party.",
    detail: "Forma Radio recorded set. Snazzback provide full band tech; Forma provide PA.",
    lineup: ["19:00 – 20:00 — Snazzback (LIVE)", "20:00 – 22:00 — Community dinner"],
    maps: "https://maps.app.goo.gl/rSUBWCfgC4RZZxr56"
  },
  {
    n: 17, key: "strange_brew", name: "Strange Brew",
    lat: 51.4575, lng: -2.5905,
    day: "Friday", date: "Jul 3", time: "22:30 – 03:00",
    title: "Closing Party — Livity Sound × Forma Radio",
    desc: "The big closing party, a collaboration with Livity Sound & Forma Radio. Free ticket link via Headfirst.",
    detail: "Finzels Reach.",
    lineup: ["22:30 – 00:00 — Muy Muy", "00:00 – 02:00 — Pev b2b Hodge", "02:00 – 03:00 — Steven Rice"],
    maps: "https://maps.app.goo.gl/E87VKQdNSMERbvdr8"
  },
  {
    n: 18, key: "st_pauls", name: "St Paul's Carnival",
    lat: 51.4628, lng: -2.5840,
    day: "Saturday", date: "Jul 4", time: "All day",
    title: "St Paul's Carnival",
    desc: "All-day celebration across the St Paul's neighbourhood. Forma base at Carmen Street Wine.",
    detail: "Programme mapped closer to the date.",
    lineup: [],
    maps: "https://maps.app.goo.gl/BnjV6HdLgQzY7xiZ9"
  },
  {
    n: 19, key: "clifton_observatory", name: "Clifton Observatory",
    lat: 51.4566, lng: -2.6265,
    day: "Sunday", date: "Jul 5", time: "17:00 – 22:00",
    title: "Farewell",
    desc: "The Forma Bristol farewell, overlooking the Avon Gorge. Doors at 17:00, music until close.",
    detail: "Forma Radio recorded set. CDJ 3000s + Technics + Xone 96. Downstairs hall + terrace.",
    lineup: ["17:00 – 18:00 — Cauliflower AM", "18:00 – 19:30 — Polymers", "19:30 – 21:00 — Monika Taneska", "21:00 – 22:00 — Background / close"],
    maps: "https://maps.app.goo.gl/kKBh1MTVSAXoTcti8"
  }
];
