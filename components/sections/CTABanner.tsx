'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

export default function CTABanner() {
  return (
    <motion.section
      id="cta-banner"
      className="bg-foreground px-6 py-28 flex justify-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-8">
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-background leading-tight font-serif"
        >
          The agents growing fastest right now are the ones{' '}
          <em className="text-gold not-italic font-bold">already posting.</em>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-sm text-white/50 leading-relaxed max-w-md">
          Book a free 20-minute consultation. We&apos;ll figure out exactly what makes sense
          for your market and your goals — no commitment required.
        </motion.p>

        <motion.a
          variants={fadeUp}
          href="#contact"
          className="bg-gold text-foreground text-xs font-semibold uppercase tracking-widest px-12 py-5 hover:opacity-90 transition-opacity"
        >
          Book Your Free Consultation
        </motion.a>
      </div>
    </motion.section>
  );
}
