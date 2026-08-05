import type { ReactNode } from 'react';
import { cx } from '../lib/cx';

type Tone = 'paper' | 'surface' | 'ink' | 'kraft';

const toneBg: Record<Tone, string> = {
  paper: 'bg-paper text-ink',
  surface: 'bg-surface text-ink',
  ink: 'bg-ink text-paper',
  kraft: 'kraft-field text-ink',
};

/**
 * The margin rule runs continuously down the site at a fixed offset, the way it
 * runs down every page of a school copy. Section eyebrows sit to the left of it,
 * in the margin, where a teacher's marks go.
 */
const toneRule: Record<Tone, string> = {
  paper: 'md:border-l-brand/40',
  surface: 'md:border-l-brand/40',
  ink: 'md:border-l-brand',
  kraft: 'md:border-l-brand/60',
};

/* `brand` red only reaches 4.2:1 on the light grounds, so small eyebrow type
   uses `brand-dark`. On kraft, plain ink is the only thing that clears 4.5:1. */
const toneEyebrow: Record<Tone, string> = {
  paper: 'text-brand-dark',
  surface: 'text-brand-dark',
  ink: 'text-mark',
  kraft: 'text-ink',
};

interface SectionProps {
  children: ReactNode;
  /** Short word placed in the left margin. Words, not numbers — these are not a sequence. */
  eyebrow?: string;
  id?: string;
  tone?: Tone;
  /** Tighter vertical rhythm for short bands. */
  compact?: boolean;
  className?: string;
}

export default function Section({
  children,
  eyebrow,
  id,
  tone = 'paper',
  compact = false,
  className,
}: SectionProps) {
  /* One class per edge, resolved here. Emitting two competing `md:pt-*` classes
     and trusting string order does not work — Tailwind orders its own output, so
     the larger value wins and `compact` gets silently ignored. */
  const marginTop = compact ? 'pt-10 md:pt-12' : 'pt-14 md:pt-24';
  const contentTop = eyebrow
    ? compact
      ? 'pt-4 md:pt-12'
      : 'pt-4 md:pt-24'
    : marginTop;
  const contentBottom = compact ? 'pb-10 md:pb-12' : 'pb-14 md:pb-24';

  return (
    <section id={id} className={cx(toneBg[tone], className)}>
      <div className="mx-auto w-full max-w-[78rem] px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[7.5rem_minmax(0,1fr)]">
          <div className={cx('md:pr-6', marginTop)}>
            {eyebrow ? (
              <p
                className={cx(
                  'font-mono text-[0.6875rem] uppercase tracking-[0.2em]',
                  toneEyebrow[tone],
                )}
              >
                {eyebrow}
              </p>
            ) : null}
          </div>
          <div
            className={cx(
              'min-w-0 md:border-l md:pl-8 lg:pl-12',
              toneRule[tone],
              contentTop,
              contentBottom,
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
