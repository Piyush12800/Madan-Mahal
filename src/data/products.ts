import type { Notebook } from '../types';

/**
 * THE CATALOGUE
 * =============
 *
 * Eight real product lines, read off the cover artwork in /public. Names,
 * sub-brands and trim sizes come from the printed covers themselves, so they are
 * safe to publish.
 *
 * Page counts, paper grades, bindings and packing are all `null`. The classmind
 * A4 cover panel does print some of these, but it was read off a compressed
 * photograph and squinting at small digits is not a source. Fill them from your
 * own records — see CONTENT-CHECKLIST.md.
 *
 * `aspect` is measured from the image files so each frame matches the real book:
 * A4 and A5 are portrait, the drawing book is landscape.
 */
export const notebooks: Notebook[] = [
  {
    slug: 'schoolmind-a4',
    name: 'A4 Premium notebook',
    subBrand: 'schoolmind',
    summary:
      'The A4 school notebook, five cover artworks, badged A4 Premium on the front.',
    covers: [
      '/SMA43.jpeg',
      '/SMA41.jpeg',
      '/SMA42.jpeg',
      '/SMA44.jpeg',
      '/SMA45.jpeg',
    ],
    aspect: 0.725,
    spreads: [{ src: '/SMA46.jpeg', aspect: 1.437 }],
    spec: {
      size: 'A4 — 21 × 29.7 cm',
      pages: null,
      paper: null,
      ruling: null,
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
  {
    slug: 'schoolmind-a5',
    name: 'Premium A5 notebook',
    subBrand: 'schoolmind',
    summary:
      'The A5 notebook in the schoolmind range — the pocket size for younger classes and rough work.',
    covers: [
      '/SMRoyal1.jpeg',
      '/SMRoyal2.jpeg',
      '/SMRoyal3.jpeg',
      '/SMRoyal5.jpeg',
    ],
    aspect: 0.762,
    spreads: [{ src: '/SMRoyal4.jpeg', aspect: 1.558 }],
    spec: {
      size: 'A5',
      pages: null,
      paper: null,
      ruling: null,
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
  {
    slug: 'classmind-a4',
    name: 'A4 note book',
    subBrand: 'classmind',
    summary:
      'The classmind A4, printed in bright full-colour artwork across four designs.',
    covers: ['/CMA41.jpeg', '/CMA42.jpeg', '/CMA43.jpeg', '/CMA44.jpeg'],
    aspect: 0.72,
    spreads: [{ src: '/CMA4-spreads.jpeg', aspect: 0.477 }],
    spec: {
      size: 'A4 — 21 × 29.7 cm',
      pages: null,
      paper: null,
      ruling: null,
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
  {
    slug: 'classmind-a5',
    name: 'Premium A5 note book',
    subBrand: 'classmind',
    summary: 'The classmind range in A5, four cover artworks.',
    covers: [
      '/CMRoyal1.jpeg',
      '/CMRoyal2.jpeg',
      '/CMRoyal3.jpeg',
      '/CMRoyal4.jpeg',
    ],
    aspect: 0.762,
    spreads: [
      { src: '/CMRoyal5.jpeg', aspect: 1.567 },
      { src: '/CMRoyal6.jpeg', aspect: 1.551 },
    ],
    spec: {
      size: 'A5',
      pages: null,
      paper: null,
      ruling: null,
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
  {
    slug: 'classmind-creative-drawing',
    name: 'Creative Drawing book',
    subBrand: 'classmind',
    summary:
      'Landscape drawing book for art and craft periods, five cover artworks.',
    covers: [
      '/CMDR1.jpeg',
      '/CMDR2.jpeg',
      '/CMDR3.jpeg',
      '/CMDR4.jpeg',
      '/CMDR5.jpeg',
    ],
    aspect: 1.298,
    spreads: [],
    spec: {
      size: null,
      pages: null,
      paper: null,
      // A drawing book is unruled by definition — the one ruling we can state.
      ruling: 'unruled',
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
  {
    slug: 'classmind-practical',
    name: 'Practical Book Premium',
    subBrand: 'classmind',
    summary:
      'The practical file for science and lab record work, with a tabbed cover.',
    covers: ['/CMPRA1.jpeg', '/CMPRA3.jpeg'],
    aspect: 0.8,
    spreads: [{ src: '/CMPRA2.jpeg', aspect: 1.606 }],
    spec: {
      size: null,
      pages: null,
      paper: null,
      ruling: null,
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
  {
    slug: 'reel-book-a4',
    name: 'A4 note book',
    subBrand: 'REEL BOOK',
    summary:
      'The REEL BOOK A4 — plainer, quote-led covers for buyers who want less artwork on the front.',
    covers: ['/RBA41.jpeg', '/RBA42.jpeg', '/RBA43.jpeg', '/RBA44.jpeg'],
    aspect: 0.718,
    spreads: [],
    spec: {
      size: 'A4 — 21 × 29.7 cm',
      pages: null,
      paper: null,
      ruling: null,
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
  {
    slug: 'madanmahal-silver-a4',
    name: 'SILVER A4 notebook',
    subBrand: 'MadanMahal SILVER',
    summary:
      'The SILVER line, carrying the Madan Mahal name on the cover rather than a school label.',
    // MMSILVERA41 carries a printed promotional overprint, so it sits last
    // rather than becoming the thumbnail for the whole line.
    covers: [
      '/MMSILVERA42.jpeg',
      '/MMSILVERA43.jpeg',
      '/MMSILVERA45.jpeg',
      '/MMSILVERA41.jpeg',
    ],
    aspect: 0.72,
    spreads: [],
    spec: {
      size: 'A4 — 21 × 29.7 cm',
      pages: null,
      paper: null,
      ruling: null,
      binding: null,
      cover: 'Printed board, full-colour',
    },
    packing: { perBundle: null, perCarton: null },
  },
];

/** Cover labels, in the order they should be offered. */
export const subBrands = [
  'schoolmind',
  'classmind',
  'REEL BOOK',
  'MadanMahal SILVER',
] as const;

export const findNotebook = (slug: string): Notebook | undefined =>
  notebooks.find((n) => n.slug === slug);

/** Total distinct cover artworks across the range — a real selling point. */
export const coverCount = notebooks.reduce((n, b) => n + b.covers.length, 0);
