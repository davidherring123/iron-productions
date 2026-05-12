'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

export default function OurWork() {
  return (
    <motion.section
      id="our-work"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-24"
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

        <motion.div
          variants={fadeUp}
          className="aspect-video bg-divider flex items-center justify-center w-full"
        >
          <span className="text-muted text-xs uppercase tracking-wider">
            Video
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
}
