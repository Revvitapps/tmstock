export type CatalogAsset = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: string;
  license: string;
  image: string;
  description: string;
  tags: string[];
};

export const catalogAssets: CatalogAsset[] = [
  {
    id: "asset-001",
    slug: "amber-editorial-cover",
    title: "Amber Editorial Cover",
    category: "Editorial portrait",
    price: "$24",
    license: "Commercial",
    image: "/catalog/editorial-amber.png",
    description: "Warm editorial portrait with polished light falloff for magazine and brand campaigns.",
    tags: ["editorial", "portrait", "warm"]
  },
  {
    id: "asset-002",
    slug: "copper-studio-story",
    title: "Copper Studio Story",
    category: "Campaign backdrop",
    price: "$29",
    license: "Commercial",
    image: "/catalog/editorial-copper.png",
    description: "Copper-toned hero frame suited for homepage headers and launch collections.",
    tags: ["campaign", "studio", "copper"]
  },
  {
    id: "asset-003",
    slug: "softlight-fashion-frame",
    title: "Softlight Fashion Frame",
    category: "Fashion portrait",
    price: "$26",
    license: "Editorial",
    image: "/catalog/editorial-softlight.png",
    description: "Soft, luxe portrait styling with a warm finish for premium editorial use.",
    tags: ["fashion", "softlight", "editorial"]
  },
  {
    id: "asset-004",
    slug: "nightfall-cover-shot",
    title: "Nightfall Cover Shot",
    category: "Moody campaign",
    price: "$31",
    license: "Commercial",
    image: "/catalog/editorial-nightfall.png",
    description: "High-contrast night editorial image built for dramatic layouts and premium ads.",
    tags: ["moody", "cover", "campaign"]
  },
  {
    id: "asset-005",
    slug: "studio-story-one",
    title: "Studio Story One",
    category: "Lifestyle set",
    price: "$22",
    license: "Commercial",
    image: "/catalog/studio-story-01.jpg",
    description: "A versatile lifestyle image with natural warmth and clean compositional balance.",
    tags: ["lifestyle", "studio", "warm"]
  },
  {
    id: "asset-006",
    slug: "studio-story-two",
    title: "Studio Story Two",
    category: "Lifestyle set",
    price: "$22",
    license: "Commercial",
    image: "/catalog/studio-story-02.jpg",
    description: "Companion studio frame for campaign bundles, lookbooks, and social launches.",
    tags: ["bundle", "lookbook", "studio"]
  },
  {
    id: "asset-007",
    slug: "studio-story-three",
    title: "Studio Story Three",
    category: "Lifestyle set",
    price: "$22",
    license: "Commercial",
    image: "/catalog/studio-story-03.png",
    description: "Graphic-forward composition with warm neutrals and broad campaign usability.",
    tags: ["graphic", "neutral", "campaign"]
  },
  {
    id: "asset-008",
    slug: "motion-set-one",
    title: "Motion Set One",
    category: "Movement shot",
    price: "$27",
    license: "Editorial",
    image: "/catalog/motion-set-01.jpg",
    description: "Dynamic editorial movement image with high-end fashion energy.",
    tags: ["motion", "editorial", "fashion"]
  },
  {
    id: "asset-009",
    slug: "motion-set-two",
    title: "Motion Set Two",
    category: "Movement shot",
    price: "$27",
    license: "Editorial",
    image: "/catalog/motion-set-02.jpg",
    description: "Companion motion frame with runway pacing and cinematic warmth.",
    tags: ["runway", "cinematic", "motion"]
  },
  {
    id: "asset-010",
    slug: "motion-set-three",
    title: "Motion Set Three",
    category: "Movement shot",
    price: "$27",
    license: "Editorial",
    image: "/catalog/motion-set-03.png",
    description: "Stylized movement image designed for feature stories and social campaigns.",
    tags: ["stylized", "social", "editorial"]
  },
  {
    id: "asset-011",
    slug: "portrait-set-one",
    title: "Portrait Set One",
    category: "Portrait",
    price: "$25",
    license: "Commercial",
    image: "/catalog/portrait-set-01.jpg",
    description: "Portrait image with polished skin tones and a warm, clean luxury mood.",
    tags: ["portrait", "luxury", "clean"]
  },
  {
    id: "asset-012",
    slug: "portrait-set-two",
    title: "Portrait Set Two",
    category: "Portrait",
    price: "$25",
    license: "Commercial",
    image: "/catalog/portrait-set-02.jpg",
    description: "Companion portrait suited for banners, product stories, and print layouts.",
    tags: ["banner", "print", "portrait"]
  },
  {
    id: "asset-013",
    slug: "portrait-set-three",
    title: "Portrait Set Three",
    category: "Portrait",
    price: "$25",
    license: "Commercial",
    image: "/catalog/portrait-set-03.png",
    description: "High-clarity beauty portrait with broad commercial flexibility.",
    tags: ["beauty", "clarity", "commercial"]
  },
  {
    id: "asset-014",
    slug: "editorial-set-one",
    title: "Editorial Set One",
    category: "Editorial story",
    price: "$28",
    license: "Editorial",
    image: "/catalog/editorial-set-01.jpg",
    description: "Storytelling editorial image with layered depth and a rich terracotta palette.",
    tags: ["storytelling", "terracotta", "editorial"]
  },
  {
    id: "asset-015",
    slug: "editorial-set-two",
    title: "Editorial Set Two",
    category: "Editorial story",
    price: "$28",
    license: "Editorial",
    image: "/catalog/editorial-set-02.png",
    description: "Companion editorial frame for premium spreads and art direction boards.",
    tags: ["spread", "art-direction", "editorial"]
  },
  {
    id: "asset-016",
    slug: "lightstock-harvest-light",
    title: "Harvest Light",
    category: "Natural light",
    price: "$24",
    license: "Commercial",
    image: "/catalog/lightstock-366151.jpg",
    description: "Natural-light frame with soft warmth and minimal styling for broad marketplace use.",
    tags: ["natural-light", "soft", "commercial"]
  },
  {
    id: "asset-017",
    slug: "lightstock-quiet-morning",
    title: "Quiet Morning",
    category: "Natural light",
    price: "$24",
    license: "Commercial",
    image: "/catalog/lightstock-366168.jpg",
    description: "Bright, approachable natural-light stock image ideal for faith, family, and lifestyle campaigns.",
    tags: ["lifestyle", "bright", "natural-light"]
  }
];

export function getCatalogAsset(slug: string) {
  return catalogAssets.find((asset) => asset.slug === slug);
}
