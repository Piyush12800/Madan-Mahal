import { useMemo, useState } from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import RulingsBoard from '../components/RulingsBoard';
import Button from '../components/Button';
import { coverCount, notebooks, subBrands } from '../data/products';
import { generalEnquiry } from '../lib/contact';
import { cx } from '../lib/cx';
import { usePageMeta } from '../lib/usePageMeta';

const chip =
  'rounded-[3px] border-[1.5px] border-ink px-3 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors';

export default function Catalogue() {
  usePageMeta(
    'Catalogue — notebooks, drawing and practical books',
    'A4 and A5 notebooks, Creative Drawing books and Practical books under the schoolmind, classmind, REEL BOOK and MadanMahal SILVER labels. Bound to order in Jabalpur.',
  );

  const [query, setQuery] = useState('');
  const [label, setLabel] = useState<string>('all');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notebooks.filter((book) => {
      if (label !== 'all' && book.subBrand !== label) return false;
      if (!q) return true;
      return [book.name, book.summary, book.subBrand, book.spec.size ?? '']
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [query, label]);

  const clear = () => {
    setQuery('');
    setLabel('all');
  };

  return (
    <>
      <Section eyebrow="Catalogue" tone="surface" compact>
        <h1 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[1.02] tracking-[-0.035em]">
          The catalogue
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite">
          {notebooks.length} lines across {subBrands.length} cover labels, with{' '}
          {coverCount} printed artworks between them. Everything is bound to
          order — send us the sizes and quantities you need.
        </p>

        {/* Filters */}
        <div className="mt-10 space-y-5">
          <div className="max-w-md">
            <label htmlFor="q" className="sr-only">
              Search the catalogue
            </label>
            <input
              id="q"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, label or size"
              className="w-full rounded-[3px] border-[1.5px] border-ink bg-surface px-4 py-3 font-sans text-[0.9375rem] text-ink placeholder:text-pencil focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by label">
            <button
              type="button"
              onClick={() => setLabel('all')}
              aria-pressed={label === 'all'}
              className={cx(
                chip,
                label === 'all'
                  ? 'bg-ink text-paper'
                  : 'bg-surface text-graphite hover:bg-mark',
              )}
            >
              All labels
            </button>
            {subBrands.map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => setLabel(name)}
                aria-pressed={label === name}
                className={cx(
                  chip,
                  label === name
                    ? 'bg-ink text-paper'
                    : 'bg-surface text-graphite hover:bg-mark',
                )}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-12">
          {results.length > 0 ? (
            <>
              <p className="mb-8 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-pencil">
                {results.length} {results.length === 1 ? 'line' : 'lines'}
              </p>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                {results.map((book) => (
                  <ProductCard key={book.slug} book={book} />
                ))}
              </div>
            </>
          ) : (
            <div className="plate max-w-lg p-8">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-[-0.02em]">
                Nothing matches that
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-graphite">
                Try a label — schoolmind, classmind, REEL BOOK — or a size like A4
                or A5. If we do not list what you need, ask anyway; most orders are
                bound to spec.
              </p>
              <button
                type="button"
                onClick={clear}
                className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brand-dark underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </Section>

      {/* ================= RULINGS ================= */}
      <Section eyebrow="Rulings" tone="paper" id="rulings">
        <h2 className="max-w-2xl font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
          Which ruling do you need?
        </h2>
        <p className="mt-4 max-w-2xl text-graphite">
          Ruling is specified per order, so it is worth naming it precisely. Each
          swatch below is drawn to its own ruling — point at the one you mean and
          we will confirm it for your quantity.
        </p>
        <div className="mt-10">
          <RulingsBoard />
        </div>
      </Section>

      <Section eyebrow="Enquire" tone="ink" compact>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="max-w-xl font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-paper">
            Send the list. We will quote it.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button href={generalEnquiry()} variant="onDark">
              Message on WhatsApp
            </Button>
            <Button to="/enquire" variant="onDark">
              Enquiry form
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
