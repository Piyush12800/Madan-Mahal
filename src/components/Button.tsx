import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cx } from '../lib/cx';

type Variant = 'primary' | 'secondary' | 'onDark';

/**
 * The hard offset shadow is lifted directly off the trademark artwork, where the
 * white label sits on a solid black shadow. Pressing a button slides it into its
 * own shadow — a pasted label being pushed flat.
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-[3px] border-[1.5px] px-6 py-3 font-sans text-[0.9375rem] font-semibold transition-[transform,box-shadow] duration-100 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none';

const variants: Record<Variant, string> = {
  primary:
    'border-ink bg-brand text-white shadow-label-sm hover:bg-brand-dark',
  secondary:
    'border-ink bg-surface text-ink shadow-label-sm hover:bg-mark',
  onDark: 'border-paper bg-paper text-ink shadow-label-brand hover:bg-mark',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

type ButtonProps = CommonProps &
  (
    | { to: string; href?: never; onClick?: never; type?: never; disabled?: never }
    | { href: string; to?: never; onClick?: never; type?: never; disabled?: never }
    | {
        type: 'button' | 'submit';
        onClick?: () => void;
        disabled?: boolean;
        to?: never;
        href?: never;
      }
  );

export default function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) {
  const classes = cx(base, variants[variant], className);

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in rest && rest.href) {
    const external = rest.href.startsWith('http');
    return (
      <a
        href={rest.href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {children}
      </a>
    );
  }

  const { type, onClick, disabled } = rest as {
    type: 'button' | 'submit';
    onClick?: () => void;
    disabled?: boolean;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cx(
        classes,
        disabled && 'cursor-not-allowed opacity-50 active:translate-x-0 active:translate-y-0',
      )}
    >
      {children}
    </button>
  );
}
