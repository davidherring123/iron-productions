'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, slideInRight, stagger, defaultViewport } from '@/lib/animations';

export default function About() {
  return (
    <motion.section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Photo — Mobile: full width | Desktop: left half */}
        <motion.div
          variants={fadeUp}
          className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden"
        >
          <Image
            src="/kameron_mullins.jpg"
            alt="Kameron Mullins, founder of Iron Productions"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Bio — Mobile: below photo | Desktop: right half */}
        <motion.div variants={slideInRight} className="w-full md:w-1/2 flex flex-col gap-6">
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="block w-8 h-px bg-gold" />
            <span className="text-xs uppercase tracking-widest text-gold">
              Who You&rsquo;re Working With
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-foreground font-serif"
          >
            Kameron Mullins
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-gold"
          >
            Founder, Iron Productions Co.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted leading-relaxed">
            I started Iron Productions Co. because I believe every business
            deserves content that actually looks like them — not generic stock
            footage and templated edits. Iron Productions is built to grow —
            but right now, every client works directly with me. You get the
            founder&rsquo;s attention, not a junior hire. As we scale, that
            standard stays the same.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted leading-relaxed">
            I&rsquo;m building this company the same way I&rsquo;d tell you to
            build your personal brand — with consistency, honesty, and work
            that speaks for itself.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#contact"
            className="inline-flex self-start mt-2 px-8 py-3.5 bg-foreground text-background text-xs font-semibold tracking-widest uppercase hover:opacity-75 transition-opacity"
          >
            Let&rsquo;s Talk
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
