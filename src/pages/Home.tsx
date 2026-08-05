import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import Plate from '../components/Plate';
import CoverArt from '../components/CoverArt';
import ProductCard from '../components/ProductCard';
import RulingsBoard from '../components/RulingsBoard';
import { askAbout, business } from '../data/site';
import { coverCount, notebooks, subBrands } from '../data/products';
import { generalEnquiry, mailLink } from '../lib/contact';
import { usePageMeta } from '../lib/usePageMeta';

export default function Home() {
  usePageMeta(
    'School notebook manufacturer in Jabalpur',
    'Madan Mahal binds school notebooks, drawing books and practical books in Jabalpur, Madhya Pradesh, under the schoolmind, classmind, REEL BOOK and MadanMahal SILVER labels. Bound to order for wholesale buyers.',
  );

  const featured = notebooks.slice(0, 4);

  return (
    <>
      {/* ================= HERO =================
          The company makes ruled paper, so the page opens as ruled paper. The
          rules draw in once on load, then stay as ambient texture behind a tight
          caps headline. */}
      <section className="ruled-field border-b-[1.5px] border-ink bg-surface">
        <div className="ruled-lines anim-draw-rules" />

        <div className="mx-auto w-full max-w-[78rem] px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[7.5rem_minmax(0,1fr)]">
            <div className="pt-12 md:pr-6 md:pt-20">
              <p className="font-mono text-[0.6875rem] uppercase leading-relaxed tracking-[0.2em] text-brand-dark">
                {business.address.city}
                <br />
                <span className="text-pencil">M.P.</span>
              </p>
            </div>

            <div className="min-w-0 pb-14 pt-4 md:border-l md:border-l-brand/40 md:pb-20 md:pl-8 md:pt-20 lg:pl-12">
              <div className="grid gap-12 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:items-end lg:gap-14">
                <div className="anim-settle">
                  <h1 className="font-display text-[clamp(2.125rem,6.6vw,4.25rem)] font-black uppercase leading-[0.95] tracking-[-0.035em] text-ink">
                    School
                    <br />
                    notebooks,
                    <br />
                    <span className="text-brand">bound in</span>
                    <br />
                    {business.address.city}.
                  </h1>

                  <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite">
                    {notebooks.length} lines under {subBrands.length} cover
                    labels, printed in {coverCount} artworks. Tell us the size,
                    the ruling and the quantity you need, and we will quote it.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href={generalEnquiry()}>Message on WhatsApp</Button>
                    <Button to="/catalogue" variant="secondary">
                      See the catalogue
                    </Button>
                  </div>

                  {/* The four cover labels, named as they appear on the books */}
                  <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2">
                    {subBrands.map((name) => (
                      <li
                        key={name}
                        className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-graphite"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* A real cover, pasted onto the page */}
                <div className="anim-settle" style={{ animationDelay: '160ms' }}>
                  <div className="max-w-[19rem]">
                    <CoverArt
                      src="/SMA43.jpeg"
                      alt="schoolmind A4 Premium notebook cover"
                      aspect={0.725}
                      eager
                      className="-rotate-[1.5deg] shadow-label"
                    />
                    <Plate
                      title="On the cover"
                      className="mt-8"
                      rows={[
                        { label: 'Label', value: business.subBrand },
                        { label: 'Size', value: 'A4 — 21 × 29.7 cm' },
                        { label: 'Cover', value: 'Printed board' },
                        { label: 'Pages', value: null },
                        { label: 'Paper', value: null },
                      ]}
                    />
                    <p className="mt-3 font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-pencil">
                      Blank lines are specifications we have not published.
                      Ask and we will confirm them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATALOGUE ================= */}
      <Section eyebrow="Catalogue" tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
            What we bind
          </h2>
          <Link
            to="/catalogue"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brand-dark underline-offset-4 hover:underline"
          >
            All {notebooks.length} lines →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {featured.map((book) => (
            <ProductCard key={book.slug} book={book} />
          ))}
        </div>
      </Section>

      {/* ================= RULINGS ================= */}
      <Section eyebrow="Rulings" tone="surface">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-2xl font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
            Name the ruling you need
          </h2>
          <Link
            to="/catalogue#rulings"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brand-dark underline-offset-4 hover:underline"
          >
            What each is used for →
          </Link>
        </div>
        <p className="mt-4 max-w-2xl text-graphite">
          Ruling is the first thing you specify on an order, so here it is drawn
          rather than described.
        </p>
        <div className="mt-10">
          <RulingsBoard compact />
        </div>
      </Section>

      {/* ================= TO ORDER =================
          Framed as things you can ask us to change, not as capability claims we
          cannot substantiate. */}
      <Section eyebrow="To order" tone="kraft">
        <h2 className="max-w-2xl font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em] text-ink">
          Ask us to change it
        </h2>
        <p className="mt-4 max-w-2xl text-ink">
          A wholesale order is rarely a stock item. These are the parts of the
          book that are yours to decide.
        </p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2">
          {askAbout.map((item) => (
            <div
              key={item.title}
              className="rounded-[3px] border-[1.5px] border-ink bg-surface p-5"
            >
              <dt className="font-display text-base font-extrabold uppercase tracking-[-0.01em] text-ink">
                {item.title}
              </dt>
              <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-graphite">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ================= ENQUIRE ================= */}
      <Section eyebrow="Enquire" tone="ink">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:items-center">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-paper">
              Send us your list.
              <br />
              <span className="text-mark">We will quote it.</span>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-paper/70">
              Size, ruling, page count and quantity is enough to start. WhatsApp
              is fastest — you can send a photo of a book you already stock.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={generalEnquiry()} variant="onDark">
                Message on WhatsApp
              </Button>
              <Button to="/enquire" variant="onDark">
                Enquiry form
              </Button>
            </div>
          </div>

          <Plate
            title="Reach us"
            rows={[
              ...business.phones.map((p) => ({ label: p.label, value: p.number })),
              { label: 'Email', value: business.email },
              { label: 'Works', value: `${business.address.city}, M.P.` },
            ]}
          />
        </div>
        <p className="mt-8 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/60">
          Prefer email?{' '}
          <a
            href={mailLink('Notebook enquiry')}
            className="text-mark underline-offset-4 hover:underline"
          >
            {business.email}
          </a>
        </p>
      </Section>
    </>
  );
}
