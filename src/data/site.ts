import type { Confirmable, Ruling } from '../types';

/**
 * Verified business facts. Everything in `business` came from the existing site
 * or the trademark artwork. Everything in `unconfirmed` is null on purpose —
 * see CONTENT-CHECKLIST.md. Fill them in; do not guess them.
 */
export const business = {
  /** Registered brand, as it appears on the trademark label. */
  brand: 'Madan Mahal',
  /** Legal / parent entity. */
  company: 'Chouksey Pustak & Paper Industries',
  /** Sub-brand printed on notebook covers. */
  subBrand: 'schoolmind',
  tagline: 'School notebooks, bound in Jabalpur.',
  email: 'choukseypaper@gmail.com',
  phones: [
    { label: 'Sales', number: '+91 94258 37763', e164: '919425837763' },
    { label: 'Office', number: '+91 89890 00658', e164: '918989000658' },
  ],
  /** WhatsApp goes to the sales line. */
  whatsapp: '919425837763',
  address: {
    line1: 'Krishna Kunj, Beside Petrol Pump',
    line2: 'Madan Mahal',
    city: 'Jabalpur',
    state: 'Madhya Pradesh',
    pin: '482002',
    country: 'India',
  },
  addressOneLine:
    'Krishna Kunj, Beside Petrol Pump, Madan Mahal, Jabalpur, Madhya Pradesh 482002',
} as const;

/**
 * Facts the site would benefit from but which we have no source for.
 * Each renders as a blank ruled line until filled. Keep them null otherwise.
 */
export const unconfirmed: Record<string, Confirmable<string>> = {
  /** Year the business was established. */
  foundedYear: null,
  /** Monthly or annual binding capacity, e.g. "40,000 books / month". */
  capacity: null,
  /** Minimum order quantity for a custom cover run. */
  moq: null,
  /** Typical lead time from confirmed artwork to dispatch. */
  leadTime: null,
  /** GST registration number. */
  gstin: null,
  /** Districts or states currently supplied. */
  serviceArea: null,
  /** Google Maps embed URL for the works. */
  mapEmbedUrl: null,
};

/**
 * Three destinations and a call to action. The rulings board is reached from the
 * home page and from within the catalogue — giving it its own nav entry would
 * light up two items at once, since a hash does not change the route.
 */
export const navigation = [
  { label: 'Catalogue', to: '/catalogue' },
  { label: 'About', to: '/about' },
  { label: 'Enquire', to: '/enquire' },
] as const;

/**
 * The ruling vocabulary. These are real Indian stationery categories, and the
 * one thing a wholesale buyer always specifies first.
 */
export const rulings: Ruling[] = [
  {
    key: 'single',
    name: 'Single ruled',
    usedFor: 'Middle and senior school, all subjects',
  },
  {
    key: 'double',
    name: 'Double ruled',
    usedFor: 'Early primary handwriting',
  },
  {
    key: 'four',
    name: 'Four ruled',
    usedFor: 'Cursive and letter-formation practice',
  },
  {
    key: 'square',
    name: 'Square / graph',
    usedFor: 'Mathematics and geometry',
  },
  {
    key: 'interleaf',
    name: 'Interleaf',
    usedFor: 'Science — ruled page facing a plain page for diagrams',
  },
  {
    key: 'unruled',
    name: 'Unruled',
    usedFor: 'Drawing and art books',
  },
];

/**
 * What a buyer can ask us to change. Framed as questions we answer on enquiry,
 * not as capability boasts we cannot substantiate.
 */
export const askAbout = [
  {
    title: 'Cover printing',
    body: 'Send your artwork, or use ours. Covers are printed board — the finish and colour count are yours to choose.',
  },
  {
    title: 'Your own label',
    body: 'Books can carry your shop or school name on the cover instead of ours.',
  },
  {
    title: 'Ruling and page count',
    body: 'Any ruling in the list opposite, at the page count and paper weight your buyers ask for.',
  },
  {
    title: 'Bundling and cartons',
    body: 'Tell us how you want books bundled and boxed and we will pack to that spec.',
  },
];
