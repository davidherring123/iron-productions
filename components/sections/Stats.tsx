'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const stats = [
  {
    value: '73%',
    label: 'Of sellers prefer agents who use video',
    source: 'NAR',
  },
  {
    value: '403%',
    label: 'More inquiries for listings with video',
    source: null,
  },
  {
    value: '9%',
    label: 'Of agents currently create listing videos',
    source: 'NAR',
  },
];

export default function Stats() {
  return (
    <motion.section
      id="stats"
      className="min-h-screen flex items-center justify-center bg-foreground px-6"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {/* Mobile: stacked | Desktop: horizontal row */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {stats.map((stat) => (
          <motion.div
            key={stat.value}
            variants={fadeUp}
            className="py-16 md:py-0 md:px-16 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0 text-center md:text-left"
          >
            <p className="text-5xl md:text-6xl font-semibold text-background mb-4">
              {stat.value}
            </p>
            <p className="text-sm leading-relaxed text-white/60">
              {stat.label}
              {stat.source && (
                <span className="ml-1 text-white/30">— {stat.source}</span>
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
