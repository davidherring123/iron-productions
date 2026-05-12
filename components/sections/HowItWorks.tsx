'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import SectionEyebrow from '@/components/ui/SectionEyebrow';

export default function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      className="flex flex-col items-center justify-center bg-foreground px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-6xl w-full">
        <SectionEyebrow label="How It Works" className="mb-6" />

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-background mb-16 max-w-xl leading-tight font-serif"
        >
          From consultation to content in days
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {HOW_IT_WORKS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="md:px-10 first:pl-0 last:pr-0 py-10 md:py-0"
            >
              <p className="text-5xl font-bold text-white/20 mb-8 leading-none">
                {step.number}
              </p>
              <h3 className="text-base font-bold text-background mb-3">
                {step.title}
              </h3>
              <p className="text-base text-white/50 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
