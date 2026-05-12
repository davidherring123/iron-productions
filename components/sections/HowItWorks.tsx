'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    body: 'We learn your brand, goals, and target market.',
  },
  {
    number: '02',
    title: 'Strategy',
    body: 'We build a content plan tailored to your listings and audience.',
  },
  {
    number: '03',
    title: 'Shoot',
    body: 'Our crew handles everything on location — you just show up.',
  },
  {
    number: '04',
    title: 'Delivery',
    body: 'Edited, branded, and ready to post within 48 hours.',
  },
];

export default function HowItWorks() {
  return (
    <motion.section
      id="how-it-works"
      className="min-h-screen flex flex-col items-center justify-center bg-foreground px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-6xl w-full">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-white/40 mb-4"
        >
          Process
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-background mb-16"
        >
          How It Works
        </motion.h2>

        {/* Mobile: stacked | Desktop: horizontal row */}
        <motion.div
          variants={stagger}
          className="flex flex-col md:flex-row gap-12 md:gap-0 md:divide-x divide-white/10"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="flex-1 md:px-10 first:pl-0 last:pr-0"
            >
              <p className="text-5xl font-semibold text-white/15 mb-5">
                {step.number}
              </p>
              <h3 className="text-base font-semibold text-background mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
