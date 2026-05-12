'use client';

import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';
import { COMPANY, STATS } from '@/lib/constants';
import Button from '@/components/ui/Button';

// Padding mirrors max-w-6xl auto-margins so the hero edges align with every other
// section. The split-overlap and clip-offset values keep the cream panel's width
// formula and clip-path in agreement.
const heroLayoutStyle = {
  '--hero-outer-pad': 'max(1.5rem, calc(50vw - 36rem))',
  '--hero-inner-pad': 'clamp(2rem, 4vw, 4rem)',
  '--hero-split-overlap': '4rem',
  '--hero-clip-offset': '8rem',
} as CSSProperties;

export default function Hero() {
  return (
    <section
      id="hero"
      style={heroLayoutStyle}
      className="min-h-screen lg:h-screen flex flex-col lg:flex-row bg-foreground overflow-hidden"
    >
      {/* Left: cream panel — extends past 50% then clips at an angle on desktop */}
      <motion.div
        className="bg-background w-full lg:w-[calc(50%+var(--hero-split-overlap))] relative z-10 flex items-center py-28 lg:py-0
                   lg:[clip-path:polygon(0_0,100%_0,calc(100%-var(--hero-clip-offset))_100%,0_100%)]
                   pl-[var(--hero-outer-pad)] pr-[var(--hero-inner-pad)]"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-lg w-full">
          <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
            <span aria-hidden="true" className="block w-8 h-px bg-gold flex-shrink-0" />
            <span className="text-xs uppercase tracking-widest text-gold font-medium">
              {COMPANY.location} — Real Estate Video
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]
                       font-semibold leading-[1.08] tracking-tight text-foreground mb-6 font-serif"
          >
            We Help Real Estate Agents Build a Brand That{' '}
            <span className="italic text-gold">Brings Clients to Them</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base text-muted max-w-sm mb-10 leading-relaxed"
          >
            Done-for-you listing videos, social content, and brand films — built for
            real estate agents who are serious about growing.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
            <Button href="#contact" variant="primary" size="md">
              Book a Free Consultation
            </Button>
            <a
              href="#pricing"
              className="text-sm text-foreground hover:text-gold transition-colors inline-flex items-center gap-1.5"
            >
              See packages ↓
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right: dark stats panel */}
      <motion.div
        className="w-full lg:flex-1 flex flex-col justify-center py-20 lg:py-0 gap-10 lg:gap-14
                   pl-[var(--hero-inner-pad)] pr-[var(--hero-outer-pad)]"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.value}
            variants={fadeUp}
            className="border-l-2 border-gold pl-6"
          >
            <p className="text-5xl lg:text-[3.25rem] xl:text-6xl font-semibold text-gold leading-none">
              {stat.value}
            </p>
            <p className="text-sm leading-relaxed text-white/60 mt-3">
              {stat.label}
              {stat.source && (
                <span className="text-white/30"> — {stat.source}</span>
              )}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
