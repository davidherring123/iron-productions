'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'accent';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  variants?: Variants;
  children: ReactNode;
  'aria-label'?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  type?: never;
  onClick?: never;
}

interface ActionProps extends BaseProps {
  href?: never;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export type ButtonProps = LinkProps | ActionProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-foreground text-background',
  accent: 'bg-gold text-foreground',
};

const VERTICAL_PADDING: Record<ButtonSize, string> = {
  sm: 'py-3',
  md: 'py-3.5',
  lg: 'py-5',
};

const HORIZONTAL_PADDING: Record<ButtonSize, string> = {
  sm: 'px-6',
  md: 'px-8',
  lg: 'px-12',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  variants,
  children,
  href,
  type,
  onClick,
  ...rest
}: ButtonProps) {
  const horizontalPadding = fullWidth ? '' : HORIZONTAL_PADDING[size];
  const widthClasses = fullWidth ? 'block w-full text-center' : 'inline-block text-center';

  const composed = [
    VARIANT_CLASSES[variant],
    VERTICAL_PADDING[size],
    horizontalPadding,
    widthClasses,
    'text-xs uppercase tracking-widest font-semibold hover:opacity-75 transition-opacity',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href !== undefined) {
    return (
      <motion.a
        href={href}
        className={composed}
        variants={variants}
        aria-label={rest['aria-label']}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type ?? 'button'}
      onClick={onClick}
      className={composed}
      variants={variants}
      aria-label={rest['aria-label']}
    >
      {children}
    </motion.button>
  );
}
