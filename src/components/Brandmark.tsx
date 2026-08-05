import { cx } from '../lib/cx';

/**
 * The trademark rebuilt in type rather than shipped as a 1.2 MB PNG: a white
 * label on a hard black shadow, stacked red caps, and the yellow ® roundel —
 * the same construction as the registered artwork, crisp at every size.
 * The photographic logo still ships as the favicon and OG image.
 */
export default function Brandmark({
  className,
  size = 'md',
}: {
  className?: string;
  size?: 'sm' | 'md';
}) {
  const type = size === 'sm' ? 'text-[0.8125rem]' : 'text-base sm:text-lg';
  const roundel = size === 'sm' ? 'h-3.5 w-3.5 text-[0.4375rem]' : 'h-4 w-4 text-[0.5rem]';

  return (
    <span
      className={cx(
        'inline-flex items-center gap-2 rounded-label border-[1.5px] border-ink bg-white px-2.5 py-1.5 shadow-label-sm',
        className,
      )}
    >
      <span
        className={cx(
          'font-display font-black uppercase leading-[0.88] tracking-[-0.03em] text-brand',
          type,
        )}
      >
        Madan
        <br />
        Mahal
      </span>
      <span
        className={cx(
          'grid shrink-0 place-items-center self-start rounded-full bg-mark font-mono font-medium text-ink',
          roundel,
        )}
        aria-hidden="true"
      >
        R
      </span>
    </span>
  );
}
