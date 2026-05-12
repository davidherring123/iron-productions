'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideInLeft, slideInRight, stagger, defaultViewport } from '@/lib/animations';

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Photo — Mobile: full width | Desktop: left half */}
        <motion.div
          variants={slideInLeft}
          className="w-full md:w-1/2 aspect-[3/4] bg-divider rounded-2xl flex items-center justify-center"
        >
          <span className="text-muted text-xs uppercase tracking-wider">
            Founder Photo
          </span>
        </motion.div>

        {/* Bio — Mobile: below photo | Desktop: right half */}
        <motion.div variants={slideInRight} className="w-full md:w-1/2 flex flex-col gap-6">
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-muted"
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-semibold text-foreground"
          >
            Kameron Mullins
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted leading-relaxed">
            Kameron founded Iron Productions with one goal: help real estate
            agents compete in a visual-first market. Based in Charlotte, NC, he
            combines cinematic production quality with a deep understanding of
            what buyers and sellers actually respond to.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted leading-relaxed">
            Every project is built around your brand — not a template.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-flex self-start mt-2 px-8 py-3.5 bg-foreground text-background text-sm font-medium rounded-full hover:opacity-75 transition-opacity"
          >
            Work with us
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
