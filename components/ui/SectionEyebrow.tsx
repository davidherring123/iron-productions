'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

interface SectionEyebrowProps {
  label: string;
  className?: string;
  showAccentBar?: boolean;
  align?: 'left' | 'center';
}

export default function SectionEyebrow({
  label,
  className = '',
  showAccentBar = true,
  align = 'left',
}: SectionEyebrowProps) {
  const justify = align === 'center' ? 'justify-center' : '';
  return (
    <motion.div
      variants={fadeUp}
      className={`flex items-center gap-3 ${justify} ${className}`.trim()}
    >
      {showAccentBar && (
        <span aria-hidden="true" className="block w-8 h-px bg-gold flex-shrink-0" />
      )}
      <span className="text-xs uppercase tracking-widest text-gold font-medium">
        {label}
      </span>
    </motion.div>
  );
}
