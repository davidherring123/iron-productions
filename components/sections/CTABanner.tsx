'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';
import Button from '@/components/ui/Button';

export default function CTABanner() {
  return (
    <motion.section
      id="cta-banner"
      className="bg-foreground px-6 py-24 flex justify-center"
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

        <motion.p variants={fadeUp} className="text-base text-white/50 leading-relaxed max-w-md">
          Book a free 20-minute consultation. We&apos;ll figure out exactly what makes sense
          for your market and your goals — no commitment required.
        </motion.p>

        <Button href="#contact" variant="accent" size="lg" variants={fadeUp}>
          Book Your Free Consultation
        </Button>
      </div>
    </motion.section>
  );
}
