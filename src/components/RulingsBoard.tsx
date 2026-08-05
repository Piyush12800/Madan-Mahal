import { rulings } from '../data/site';
import RulingSwatch from './RulingSwatch';

/**
 * The ruling is the first thing a wholesale buyer specifies, so it gets shown
 * rather than listed — each swatch draws its own ruling.
 */
export default function RulingsBoard({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {rulings.map((r) => (
          <li key={r.key}>
            <RulingSwatch ruling={r.key} className="h-24 border-[1.5px] border-ink" />
            <p className="mt-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-graphite">
              {r.name}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {rulings.map((r) => (
        <li key={r.key} className="plate overflow-hidden">
          <RulingSwatch ruling={r.key} className="h-36 border-b-[1.5px] border-ink" />
          <div className="p-4">
            <h3 className="font-display text-base font-extrabold uppercase tracking-[-0.01em] text-ink">
              {r.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-graphite">{r.usedFor}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
