'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

export default function OurWork() {
  return (
    <motion.section
      id="our-work"
      className="flex flex-col items-center bg-foreground px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-4xl w-full flex flex-col items-center">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-gold mb-4 text-center"
        >
          Our Work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-background mb-12 text-center font-serif"
        >
          See What We Create
        </motion.h2>

        <motion.div variants={fadeUp} className="w-full">
          {/* Desktop */}
          <video
            src="/portfolio_desktop.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="hidden md:block w-full aspect-video object-cover"
          />
          {/* Mobile */}
          <video
            src="/portfolio_mobile.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="block md:hidden w-full aspect-[9/16] object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
