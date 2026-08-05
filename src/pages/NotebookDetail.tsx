import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import Plate from '../components/Plate';
import CoverArt from '../components/CoverArt';
import RulingSwatch from '../components/RulingSwatch';
import ProductCard from '../components/ProductCard';
import { findNotebook, notebooks } from '../data/products';
import { rulings } from '../data/site';
import { mailLink, productEnquiry } from '../lib/contact';
import { usePageMeta } from '../lib/usePageMeta';
import { cx } from '../lib/cx';

export default function NotebookDetail() {
  const { slug } = useParams<{ slug: string }>();
  const book = slug ? findNotebook(slug) : undefined;
  const [active, setActive] = useState(0);

  usePageMeta(
    book ? `${book.subBrand} ${book.name}` : 'Not in the catalogue',
    book
      ? `${book.subBrand} ${book.name} — ${book.summary} Bound to order in Jabalpur by Madan Mahal.`
      : 'That catalogue entry does not exist.',
  );

  if (!book) {
    return (
      <Section eyebrow="Catalogue" tone="surface">
        <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-black uppercase tracking-[-0.03em]">
          Not in the catalogue
        </h1>
        <p className="mt-4 max-w-xl text-graphite">
          That entry does not exist — it may have been renamed. The full list is
          short, so it is quickest to look through it.
        </p>
        <div className="mt-8">
          <Button to="/catalogue">See the catalogue</Button>
        </div>
      </Section>
    );
  }

  const ruling = book.spec.ruling
    ? rulings.find((r) => r.key === book.spec.ruling)
    : undefined;

  const others = notebooks.filter((n) => n.slug !== book.slug).slice(0, 4);
  const activeSrc = book.covers[Math.min(active, book.covers.length - 1)];

  return (
    <>
      <Section eyebrow="Catalogue" tone="surface">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            to="/catalogue"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brand-dark underline-offset-4 hover:underline"
          >
            ← Catalogue
          </Link>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* ---------- Cover gallery ---------- */}
          <div>
            <div className={book.aspect > 1 ? 'max-w-xl' : 'max-w-sm'}>
              <CoverArt
                src={activeSrc}
                alt={`${book.subBrand} ${book.name} — cover ${active + 1} of ${book.covers.length}`}
                aspect={book.aspect}
                eager
                className="shadow-label"
              />
            </div>

            {book.covers.length > 1 ? (
              <>
                <h2 className="mt-8 font-mono text-[0.625rem] uppercase tracking-[0.22em] text-graphite">
                  {book.covers.length} cover artworks
                </h2>
                <ul
                  className={cx(
                    'mt-3 grid gap-3',
                    book.aspect > 1 ? 'grid-cols-3 sm:grid-cols-5' : 'grid-cols-5',
                  )}
                >
                  {book.covers.map((src, index) => (
                    <li key={src}>
                      <button
                        type="button"
                        onClick={() => setActive(index)}
                        aria-pressed={index === active}
                        aria-label={`Show cover ${index + 1}`}
                        className={cx(
                          'block w-full overflow-hidden border-[1.5px] transition-colors',
                          index === active
                            ? 'border-brand'
                            : 'border-ink/25 hover:border-ink',
                        )}
                        style={{ aspectRatio: String(book.aspect) }}
                      >
                        <img
                          src={src}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-pencil">
                  Cover artwork varies by print run. Ask which designs are in
                  stock, or send your own.
                </p>
              </>
            ) : null}
          </div>

          {/* ---------- Detail ---------- */}
          <div>
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-brand-dark">
              {book.subBrand}
            </p>
            <h1 className="mt-2 font-display text-[clamp(1.875rem,4.4vw,3rem)] font-black uppercase leading-[1.03] tracking-[-0.035em]">
              {book.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
              {book.summary}
            </p>

            {/* THE NAME PLATE — specifications in the box a school copy already has */}
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <Plate
                title="Specification"
                rows={[
                  { label: 'Size', value: book.spec.size },
                  { label: 'Pages', value: book.spec.pages },
                  { label: 'Paper', value: book.spec.paper },
                  { label: 'Ruling', value: ruling?.name ?? null },
                  { label: 'Binding', value: book.spec.binding },
                  { label: 'Cover', value: book.spec.cover },
                ]}
              />
              <Plate
                title="Packing"
                rows={[
                  { label: 'Per bundle', value: book.packing.perBundle },
                  { label: 'Per carton', value: book.packing.perCarton },
                ]}
              />
            </div>

            <p className="mt-4 max-w-xl font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-pencil">
              A blank line is a figure we have not published — not a figure that
              does not exist. Ask and we will confirm it in writing.
            </p>

            {ruling ? (
              <div className="mt-9 max-w-xl">
                <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-graphite">
                  {ruling.name}
                </h2>
                <RulingSwatch
                  ruling={ruling.key}
                  className="mt-3 h-24 border-[1.5px] border-ink"
                />
                <p className="mt-2 text-sm text-graphite">{ruling.usedFor}</p>
              </div>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={productEnquiry(`${book.subBrand} ${book.name}`)}>
                Ask about this book
              </Button>
              <Button
                href={mailLink(`Enquiry — ${book.subBrand} ${book.name}`)}
                variant="secondary"
              >
                Email instead
              </Button>
            </div>
            <p className="mt-4 text-sm text-pencil">
              Rates depend on quantity, ruling and cover, so we quote rather than
              list prices.
            </p>
          </div>
        </div>

        {/* ---------- Front and back ---------- */}
        {book.spreads.length > 0 ? (
          <div className="mt-16 border-t-[1.5px] border-ink/15 pt-12">
            <h2 className="font-display text-xl font-extrabold uppercase tracking-[-0.02em]">
              Front and back
            </h2>
            <p className="mt-2 max-w-xl text-graphite">
              The full printed sheet, including the back cover panel.
            </p>
            <ul className="mt-6 grid gap-6 lg:grid-cols-2">
              {book.spreads.map((spread) => (
                <li key={spread.src}>
                  <CoverArt
                    src={spread.src}
                    alt={`${book.subBrand} ${book.name} front and back cover`}
                    aspect={spread.aspect}
                    className={spread.aspect < 1 ? 'mx-auto max-w-xs' : ''}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      <Section eyebrow="Also" tone="paper">
        <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
          Other books
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {others.map((other) => (
            <ProductCard key={other.slug} book={other} />
          ))}
        </div>
      </Section>
    </>
  );
}
