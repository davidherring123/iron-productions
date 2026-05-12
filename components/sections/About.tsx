'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';
import { COMPANY } from '@/lib/constants';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Button from '@/components/ui/Button';

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
        <motion.div
          variants={fadeUp}
          className="relative w-full md:w-1/2 aspect-[3/4] overflow-hidden"
        >
          <Image
            src="/kameron_mullins.jpg"
            alt={`${COMPANY.founder}, founder of ${COMPANY.name}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div variants={fadeUp} className="w-full md:w-1/2 flex flex-col gap-6">
          <SectionEyebrow label="Who You're Working With" />
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold text-foreground font-serif"
          >
            {COMPANY.founder}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-gold font-medium"
          >
            Founder, {COMPANY.legalName}
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted leading-relaxed">
            I started {COMPANY.legalName} because I believe every business
            deserves content that actually looks like them — not generic stock
            footage and templated edits. {COMPANY.name} is built to grow —
            but right now, every client works directly with me. You get the
            founder&rsquo;s attention, not a junior hire. As we scale, that
            standard stays the same.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted leading-relaxed">
            I&rsquo;m building this company the same way I&rsquo;d tell you to
            build your personal brand — with consistency, honesty, and work
            that speaks for itself.
          </motion.p>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            variants={fadeUp}
            className="self-start mt-2"
          >
            Let&rsquo;s Talk
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
