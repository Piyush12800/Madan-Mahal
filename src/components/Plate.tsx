import type { Confirmable } from '../types';
import { cx } from '../lib/cx';

export interface PlateRow {
  label: string;
  value: Confirmable<string>;
}

interface PlateProps {
  title?: string;
  rows: PlateRow[];
  className?: string;
}

/**
 * THE NAME PLATE — the signature element.
 *
 * Every Indian school copy has a box printed on the cover: Name ____ Class ____
 * Subject ____. This is that box, carrying specifications instead.
 *
 * A value we have not confirmed leaves its line blank and prints "ask us" at the
 * end, exactly as an unfilled field would look on a real cover. That keeps the
 * page honest and turns a gap into an invitation rather than a hole.
 */
export default function Plate({ title, rows, className }: PlateProps) {
  return (
    <div className={cx('plate', className)}>
      {title ? (
        <div className="border-b-[1.5px] border-ink bg-ink px-3 py-1.5">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-paper">
            {title}
          </span>
        </div>
      ) : null}
      <dl className="px-3 py-2">
        {rows.map((row) => (
          <div key={row.label} className="plate-row">
            <dt className="shrink-0 uppercase tracking-[0.14em] text-pencil">
              {row.label}
            </dt>
            <span className="plate-leader" aria-hidden="true" />
            <dd
              className={cx(
                'min-w-0 text-right [overflow-wrap:anywhere]',
                row.value ? 'font-medium text-ink' : 'italic text-pencil',
              )}
            >
              {row.value ?? 'ask us'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
