import { Link } from 'react-router-dom';
import { business, navigation } from '../data/site';
import { mailLink, mapsLink, telLink } from '../lib/contact';

export default function Footer() {
  return (
    <footer className="border-t-[1.5px] border-ink bg-ink text-paper">
      <div className="mx-auto w-full max-w-[78rem] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            {/* The registered artwork, given room to breathe instead of being squashed */}
            <div className="inline-flex rounded-label border-[1.5px] border-paper/20 bg-white p-3">
              <img
                src="/logo.png"
                alt={`${business.brand} registered trademark`}
                width="220"
                height="147"
                loading="lazy"
                className="h-auto w-[180px] object-contain"
              />
            </div>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-paper/70">
              {business.company} binds school notebooks, exercise books and
              registers in {business.address.city}. Covers, rulings and page
              counts are made to your order.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-mark">
              Pages
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[0.9375rem] text-paper/75 underline-offset-4 hover:text-mark hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-mark">
              Reach us
            </h2>
            <ul className="mt-4 space-y-3 text-[0.9375rem]">
              {business.phones.map((p) => (
                <li key={p.e164}>
                  <a
                    href={telLink(p.e164)}
                    className="text-paper/85 underline-offset-4 hover:text-mark hover:underline"
                  >
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper/60">
                      {p.label}{' '}
                    </span>
                    {p.number}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={mailLink('Notebook enquiry')}
                  className="text-paper/85 underline-offset-4 hover:text-mark hover:underline"
                >
                  {business.email}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block leading-relaxed text-paper/70 underline-offset-4 hover:text-mark hover:underline"
                >
                  {business.address.line1},<br />
                  {business.address.line2}, {business.address.city},<br />
                  {business.address.state} {business.address.pin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/15 pt-6 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.company}
          </p>
          <p>
            {business.brand} is a registered trademark · {business.address.city},{' '}
            {business.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
