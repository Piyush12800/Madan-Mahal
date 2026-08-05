import { cx } from '../lib/cx';

/**
 * A cover in its own proportion. `aspect` is measured from the image file, so an
 * A4 notebook, an A5 and a landscape drawing book each get the frame of the real
 * book instead of one shared square.
 */
export default function CoverArt({
  src,
  alt,
  aspect,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  aspect: number;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={cx(
        'overflow-hidden border-[1.5px] border-ink bg-surface',
        className,
      )}
      style={{ aspectRatio: String(aspect) }}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
