/**
 * A fact we have NOT confirmed with the business.
 *
 * `null` is the only permitted stand-in for unknown data. It renders as a blank
 * ruled line inside a name plate — never as an invented number. Do not replace
 * a null with a guess; replace it with the real figure or leave it blank.
 */
export type Confirmable<T> = T | null;

export type RulingKey =
  | 'single'
  | 'double'
  | 'four'
  | 'square'
  | 'interleaf'
  | 'unruled';

export interface Ruling {
  key: RulingKey;
  name: string;
  /** Who it's bought for — the thing a wholesale buyer actually needs to know. */
  usedFor: string;
}

export interface NotebookSpec {
  /** Trim size, e.g. "A4 — 21 × 29.7 cm" */
  size: Confirmable<string>;
  /** Page count as printed on the cover, e.g. "192 pages" */
  pages: Confirmable<string>;
  /** Paper weight or grade, e.g. "58 GSM" */
  paper: Confirmable<string>;
  ruling: Confirmable<RulingKey>;
  /** e.g. "Centre pin", "Perfect bound", "Spiral" */
  binding: Confirmable<string>;
  /** e.g. "Printed board, full-colour" */
  cover: Confirmable<string>;
}

export interface NotebookPacking {
  perBundle: Confirmable<string>;
  perCarton: Confirmable<string>;
}

/** A front-and-back cover spread. These are wide, so they get their own frame. */
export interface CoverSpread {
  src: string;
  /** width ÷ height, measured from the file. */
  aspect: number;
}

export interface Notebook {
  slug: string;
  /** Product name as printed on the cover. */
  name: string;
  /** Cover label: schoolmind, classmind, REEL BOOK, MadanMahal SILVER. */
  subBrand: string;
  summary: string;
  /** Cover artworks available in this line. The first is the thumbnail. */
  covers: string[];
  /** width ÷ height of a single cover in this line. */
  aspect: number;
  spreads: CoverSpread[];
  spec: NotebookSpec;
  packing: NotebookPacking;
}

export interface EnquiryForm {
  name: string;
  organisation: string;
  phone: string;
  email: string;
  requirement: string;
}
