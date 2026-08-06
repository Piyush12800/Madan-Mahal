import Section from '../components/Section';
import Button from '../components/Button';
import Plate from '../components/Plate';
import { business, unconfirmed } from '../data/site';
import { generalEnquiry, mapsLink } from '../lib/contact';
import { usePageMeta } from '../lib/usePageMeta';

export default function About() {
  usePageMeta(
    'About the works',
    `${business.company} binds school notebooks in the Madan Mahal locality of Jabalpur, Madhya Pradesh, under the registered Madan Mahal mark.`,
  );

  return (
    <>
      <Section eyebrow="About" tone="surface">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_minmax(0,1fr)] lg:gap-16">
          <div>
            <h1 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[1.02] tracking-[-0.035em]">
              A binder, a mark,
              <br />
              <span className="text-brand">and a neighbourhood</span>
            </h1>

            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-graphite">
              <p>
                {business.company} binds school notebooks, exercise books and
                registers in {business.address.city}, Madhya Pradesh. The books
                go out under the registered{' '}
                <strong className="font-semibold text-ink">
                  {business.brand}
                </strong>{' '}
                mark, and the school range carries the{' '}
                <strong className="font-semibold text-ink">
                  {business.subBrand}
                </strong>{' '}
                label on the cover.
              </p>
              <p>
                The name is the neighbourhood's. The works stand in Madan Mahal,
                and the mark draws the fort that the locality is named after —
                the Gond-era fort that sits on a balancing rock above the city.
              </p>
              <p>
                Most of what we send out is not a stock item. A distributor asks
                for a size, a ruling and a page count; a school asks for its own
                name on the cover. That is the work.
              </p>
            </div>

            {/* One short, honest note. It explains the blanks elsewhere on the
                site without turning into an apology. */}
            <div className="mt-10 max-w-xl border-l-[3px] border-brand pl-5">
              <p className="text-[0.9375rem] leading-relaxed text-graphite">
                Where this site does not have a figure, it leaves the line blank
                and asks you to get in touch. We would rather answer a question
                than print a claim we cannot stand behind.
              </p>
            </div>
          </div>

          <div>
            {/* The registered artwork, shown at a size where you can actually read it */}
            <div className="rounded-label border-[1.5px] border-ink bg-white p-5 shadow-label">
              <img
                src="/logo.png"
                alt={`${business.brand} registered trademark — the fort at Madan Mahal, Jabalpur`}
                width="640"
                height="427"
                className="h-auto w-full object-contain"
              />
            </div>
            <p className="mt-3 font-mono text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-pencil">
              The registered mark
            </p>

            <Plate
              title="The business"
              className="mt-9"
              rows={[
                { label: 'Trading as', value: business.brand },
                { label: 'Entity', value: business.company },
                { label: 'Works', value: `${business.address.city}, M.P.` },
                { label: 'Established', value: unconfirmed.foundedYear },
                { label: 'Capacity', value: unconfirmed.capacity },
                { label: 'Min. order', value: unconfirmed.moq },
                { label: 'Lead time', value: unconfirmed.leadTime },
                { label: 'GSTIN', value: unconfirmed.gstin },
                { label: 'Supplies', value: unconfirmed.serviceArea },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* ================= WHERE ================= */}
      <Section eyebrow="Where" tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,1fr)] lg:items-center">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.03em]">
              Find the works
            </h2>
            <address className="mt-6 max-w-sm text-lg not-italic leading-relaxed text-graphite">
              {business.address.line1},
              <br />
              {business.address.line2}, {business.address.city},
              <br />
              {business.address.state} {business.address.pin}
              <br />
              {business.address.country}
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={mapsLink()} variant="secondary">
                Open in Google Maps
              </Button>
              <Button href={generalEnquiry()}>Message on WhatsApp</Button>
            </div>
          </div>

          {/* No embedded map until someone supplies the real embed URL — a link
              that works beats a grey box that says [Map Placeholder]. */}
          {unconfirmed.mapEmbedUrl ? (
            <div className="overflow-hidden rounded-[3px] border-[1.5px] border-ink">
              <iframe
                src={unconfirmed.mapEmbedUrl}
                title={`Map to ${business.company}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0"
              />
            </div>
          ) : (
            <a
              href={mapsLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex h-64 flex-col justify-end rounded-[3px] border-[1.5px] border-ink bg-surface p-6 transition-[transform,box-shadow] duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-label"
            >
              <span className="font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-ink">
                {business.address.line2}, {business.address.city}
              </span>
              <span className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brand-dark">
                Open directions →
              </span>
            </a>
          )}
        </div>
      </Section>
    </>
  );
}
