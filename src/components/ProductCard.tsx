import { Link } from 'react-router-dom';
import type { Notebook } from '../types';
import CoverArt from './CoverArt';

export default function ProductCard({ book }: { book: Notebook }) {
  return (
    <article>
      <Link to={`/catalogue/${book.slug}`} className="group block">
        <div className="relative">
          {/* The card peels up off the page into its own hard shadow, the way a
              pasted label lifts at the corner. */}
          <CoverArt
            src={book.covers[0]}
            alt={`${book.subBrand} ${book.name} cover`}
            aspect={book.aspect}
            className="transition-[transform,box-shadow] duration-150 group-hover:-translate-x-[3px] group-hover:-translate-y-[3px] group-hover:shadow-label group-focus-visible:-translate-x-[3px] group-focus-visible:-translate-y-[3px] group-focus-visible:shadow-label"
          />

          {book.covers.length > 1 ? (
            <span className="absolute right-0 top-3 -rotate-3 border-y-[1.5px] border-l-[1.5px] border-ink bg-mark px-2 py-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.16em] text-ink">
              {book.covers.length} covers
            </span>
          ) : null}
        </div>

        <div className="mt-3">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-brand-dark">
            {book.subBrand}
          </p>
          <h3 className="mt-0.5 font-display text-lg font-extrabold leading-tight text-ink group-hover:text-brand-dark">
            {book.name}
          </h3>
          <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-pencil">
            {book.spec.size ?? 'Size on request'}
          </p>
        </div>
      </Link>
    </article>
  );
}
