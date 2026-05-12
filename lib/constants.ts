export const COLORS = {
  background: '#ECE7DF', // warm cream
  foreground: '#0D0D0D', // deep black
  muted: '#78706A',      // warm ash
  divider: '#D5CFC6',    // warm bone
  gold: '#C9A96E',       // brand gold accent
} as const;

export const COMPANY = {
  name: 'Iron Productions',
  legalName: 'Iron Productions Co.',
  founder: 'Kameron Mullins',
  location: 'Charlotte, NC',
  responseWindow: '48 hours',
} as const;

export const LAYOUT = {
  scrollThreshold: 20,
  headerLogoWidth: 180,
  headerLogoHeight: 36,
} as const;

export const ICONS = {
  strokeColor: '#1a1a1a',
  strokeWidth: 1.5,
  viewBoxSize: 20,
} as const;

export const STATS: ReadonlyArray<{
  value: string;
  label: string;
  source: string | null;
}> = [
  { value: '73%', label: 'Of sellers prefer agents who use video', source: 'NAR' },
  { value: '403%', label: 'More inquiries for listings with video', source: 'DigitalSherpa' },
  { value: '9%', label: 'Of agents currently create listing videos', source: 'NAR' },
];

export interface PainPoint {
  title: string;
  body: string;
  iconName: 'video' | 'people' | 'phone' | 'house';
}

export const PAIN_POINTS: ReadonlyArray<PainPoint> = [
  {
    title: 'You know you need video',
    body: "But filming, editing, and posting consistently feels impossible on top of everything else you're managing.",
    iconName: 'video',
  },
  {
    title: "You're blending into the feed",
    body: 'Your competitors are posting the same headshots. One well-produced brand film separates you before a single conversation.',
    iconName: 'people',
  },
  {
    title: 'Leads go cold before they call',
    body: "Buyers and sellers research before they reach out. If they can't find you online, they'll find someone else.",
    iconName: 'phone',
  },
  {
    title: 'Your listings deserve better',
    body: 'Professional listing video drives more showings, faster closes, and higher perceived value — it pays for itself.',
    iconName: 'house',
  },
];

export interface PricingTier {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular: boolean;
  note: string | null;
  cta: string;
  features: ReadonlyArray<string>;
}

export const PRICING_TIERS: ReadonlyArray<PricingTier> = [
  {
    name: 'Listing Video',
    subtitle: 'Make every property stand out from the moment it hits the market',
    price: '$1,200',
    period: 'Per Listing',
    popular: false,
    note: null,
    cta: 'Book a Listing Shoot',
    features: [
      'Up to 3-hour shoot on location',
      'Horizontal (16:9) cut for MLS & website',
      'Vertical (9:16) cut for Instagram & TikTok',
      'Professional edit with music & color grade',
      'Delivered within 5 business days',
    ],
  },
  {
    name: 'Agent Brand Retainer',
    subtitle: 'Show up every week without lifting a finger',
    price: '$2,000',
    period: 'Per Month — 3-Month Minimum',
    popular: true,
    note: '3-month minimum required. Real brand growth takes a runway, not a month.',
    cta: 'Start Your Retainer',
    features: [
      '8 short-form videos per month',
      '1 content shoot per month (up to 2 hours)',
      'Edited for Instagram Reels & TikTok',
      'Content strategy tailored to your market',
      'You show up — we handle the rest',
    ],
  },
  {
    name: 'Agent Brand Film',
    subtitle: 'The 60–90 second video that answers "why you" before the call',
    price: '$2,500',
    period: 'One-Time Investment',
    popular: false,
    note: null,
    cta: 'Book a Brand Film',
    features: [
      'Half-day on-location shoot',
      'Cinematic edit with music & color grade',
      'Sound design included',
      'One round of revisions',
      'Delivered for web, email signature & social',
    ],
  },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  body: string;
}

export const HOW_IT_WORKS_STEPS: ReadonlyArray<HowItWorksStep> = [
  {
    number: '01',
    title: 'Free Consultation',
    body: 'We learn your goals, your market, and what kind of content fits your brand. No pressure, no obligation.',
  },
  {
    number: '02',
    title: 'Content Strategy',
    body: 'We build a plan around your goals — what to film, how often, and what will actually move the needle.',
  },
  {
    number: '03',
    title: 'We Shoot',
    body: 'You show up. We handle everything on location — setup, direction, and getting the shots we need.',
  },
  {
    number: '04',
    title: 'Content Delivered',
    body: "Edited, optimized, and ready to post. Delivered to your inbox. You approve and share — that's it.",
  },
];

export const CONTACT_PACKAGES: ReadonlyArray<string> = [
  'Listing Video',
  'Agent Brand Retainer',
  'Agent Brand Film',
  'Not sure yet',
];
