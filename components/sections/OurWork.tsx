'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const placeholders = Array.from({ length: 6 }, (_, i) => i + 1);

export default function OurWork() {
  return (
    <motion.section
      id="our-work"
      className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-6xl w-full">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-muted mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-foreground mb-16"
        >
          Our Work
        </motion.h2>

        {/* Mobile: 1 col | Desktop: 3 col */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {placeholders.map((n) => (
            <motion.div
              key={n}
              variants={fadeUp}
              className="aspect-video bg-divider rounded-xl flex items-center justify-center"
            >
              <span className="text-muted text-xs uppercase tracking-wider">
                Video {n}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
