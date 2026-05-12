'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';

const stats = [
  { value: '73%', label: 'Of sellers prefer agents who use video', source: 'NAR' },
  { value: '403%', label: 'More inquiries for listings with video', source: 'DigitalSherpa' },
  { value: '9%', label: 'Of agents currently create listing videos', source: 'NAR' },
];

// Outer padding mirrors max-w-6xl (72rem) auto-margins so content edges
// align with every other section on the page.
const outerPad = 'max(1.5rem, calc(50vw - 36rem))';
const innerPad = 'clamp(2rem, 4vw, 4rem)';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen lg:h-screen flex flex-col lg:flex-row bg-foreground overflow-hidden">
      {/* ── Left: cream — extends past 50% then clips at an angle ── */}
      <motion.div
        className="bg-background w-full lg:w-[calc(50%+4rem)] relative z-10 flex items-center py-28 lg:py-0
                   lg:[clip-path:polygon(0_0,100%_0,calc(100%-8rem)_100%,0_100%)]"
        style={{ paddingLeft: outerPad, paddingRight: innerPad }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-lg w-full">
          <motion.p
            variants={fadeUp}
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gold mb-8"
          >
            <span className="block w-8 h-px bg-gold flex-shrink-0" aria-hidden="true" />
            Charlotte, NC — Real Estate Video
          </motion.p>

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
            className="text-sm text-muted max-w-sm mb-10 leading-relaxed"
          >
            Done-for-you listing videos, social content, and brand films — built for
            real estate agents who are serious about growing.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="px-7 py-3.5 bg-foreground text-background text-[11px] uppercase
                         tracking-widest font-medium hover:opacity-75 transition-opacity"
            >
              Book a Free Consultation
            </a>
            <a
              href="#pricing"
              className="text-sm text-foreground hover:text-gold transition-colors
                         inline-flex items-center gap-1.5"
            >
              See packages ↓
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Right: dark stats ── */}
      <motion.div
        className="w-full lg:flex-1 flex flex-col justify-center
                   py-20 lg:py-0 gap-10 lg:gap-14"
        style={{ paddingRight: outerPad, paddingLeft: innerPad }}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {stats.map((stat) => (
          <motion.div key={stat.value} variants={fadeUp} className="border-l-2 border-gold pl-6">
            <p className="text-5xl lg:text-[3.25rem] xl:text-6xl font-semibold text-gold leading-none">
              {stat.value}
            </p>
            <p className="text-[13px] leading-relaxed text-white/60 mt-3">
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
