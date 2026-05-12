'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    body: 'We learn your goals, your market, and what kind of content fits your brand. No pressure, no obligation.',
  },
  {
    number: '02',
    title: 'Content Strategy',
    body: 'We build a plan around your goals — what to film, how often, and what will actually move the needle.',
  },
  {
    number: '03',
    title: 'We Shoot',
    body: 'You show up. We handle everything on location — setup, direction, and getting the shots we need.',
  },
  {
    number: '04',
    title: 'Content Delivered',
    body: 'Edited, optimized, and ready to post. Delivered to your inbox. You approve and share — that\'s it.',
  },
];

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
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <p className="text-xs uppercase tracking-widest text-gold font-medium">
            How It Works
          </p>
        </motion.div>

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
          {steps.map((step) => (
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
