import type { RulingKey } from '../types';
import { cx } from '../lib/cx';

const patterns: Record<Exclude<RulingKey, 'interleaf'>, string> = {
  single: 'ruling-single',
  double: 'ruling-double',
  four: 'ruling-four',
  square: 'ruling-square',
  unruled: 'ruling-none',
};

/**
 * Each ruling is drawn as itself, in CSS. No photographs, no icons — a buyer
 * choosing between single and four ruled should see the actual difference.
 */
export default function RulingSwatch({
  ruling,
  className,
}: {
  ruling: RulingKey;
  className?: string;
}) {
  if (ruling === 'interleaf') {
    // An interleaf book is a ruled page facing a plain one. Show the spread.
    return (
      <div
        className={cx('ruling-base flex overflow-hidden', className)}
        aria-hidden="true"
      >
        <div className="ruling-single w-1/2" />
        <div className="w-px bg-ink/25" />
        <div className="ruling-none w-1/2" />
      </div>
    );
  }

  return (
    <div
      className={cx('ruling-base overflow-hidden', patterns[ruling], className)}
      aria-hidden="true"
    />
  );
}
