'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/animations';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background px-6"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Mobile: centered | Desktop: left-aligned */}
      <div className="max-w-4xl w-full text-center md:text-left">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-gold mb-6"
        >
          Charlotte, NC — Real Estate Video
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-foreground mb-6"
        >
          We Help Real Estate Agents Build a Brand That{' '}
          <span className="italic text-gold">Brings Clients to Them</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted max-w-xl mx-auto md:mx-0 mb-10"
        >
          Done-for-you listing videos, social content, and brand films.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-75 transition-opacity"
          >
            Book a Free Consultation
          </a>
          <a
            href="#pricing"
            className="px-8 py-3.5 border border-foreground text-foreground text-sm font-medium rounded-full hover:bg-foreground hover:text-background transition-colors"
          >
            See Packages
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
