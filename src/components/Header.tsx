import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { business, navigation } from '../data/site';
import { generalEnquiry, telLink } from '../lib/contact';
import { cx } from '../lib/cx';
import Brandmark from './Brandmark';
import Button from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // A route change should never leave the mobile menu hanging open.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cx(
      'relative py-1 font-sans text-[0.9375rem] font-medium transition-colors',
      isActive ? 'text-ink' : 'text-graphite hover:text-ink',
      isActive &&
        'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:bg-mark',
    );

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip — a wholesale buyer wants the phone number, not a search icon */}
      <div className="hidden bg-ink text-paper md:block">
        <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between gap-6 px-5 py-1.5 sm:px-8">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-paper/75">
            {business.company} · {business.address.city}, {business.address.state}
          </p>
          <div className="flex items-center gap-4">
            {business.phones.map((p) => (
              <a
                key={p.e164}
                href={telLink(p.e164)}
                className="font-mono text-[0.6875rem] tracking-[0.08em] text-paper/85 hover:text-mark"
              >
                <span className="text-paper/65">{p.label} </span>
                {p.number}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b-[1.5px] border-ink bg-paper/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link to="/" aria-label={`${business.brand} — home`}>
            <Brandmark />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <Button href={generalEnquiry()}>Message on WhatsApp</Button>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex items-center gap-2 rounded-[3px] border-[1.5px] border-ink bg-surface px-3 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] shadow-label-sm active:translate-x-[3px] active:translate-y-[3px] active:shadow-none lg:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-b-[1.5px] border-ink bg-surface lg:hidden"
        >
          <nav className="mx-auto w-full max-w-[78rem] px-5 py-4 sm:px-8" aria-label="Main">
            <ul className="divide-y divide-ink/10">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="block py-3 font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-ink"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* The old site dropped its call-to-action on mobile. This one does not. */}
            <div className="mt-5 flex flex-col gap-3">
              <Button href={generalEnquiry()}>Message on WhatsApp</Button>
              {business.phones.map((p) => (
                <a
                  key={p.e164}
                  href={telLink(p.e164)}
                  className="font-mono text-sm tracking-[0.06em] text-graphite"
                >
                  <span className="uppercase text-pencil">{p.label} </span>
                  {p.number}
                </a>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
