'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';
import { PAIN_POINTS } from '@/lib/constants';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import PainPointIcon from '@/components/ui/PainPointIcons';

export default function BuiltForYou() {
  return (
    <motion.section
      id="built-for-you"
      className="flex flex-col items-center justify-center bg-white px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-6xl w-full">
        <SectionEyebrow label="Built for You" className="mb-6" />

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-foreground mb-16 max-w-xl leading-tight font-serif"
        >
          Most agents are invisible online. We fix that.
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-divider"
        >
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              className={`p-8 flex flex-col gap-6 ${
                i < PAIN_POINTS.length - 1 ? 'md:border-r border-divider' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-icon-bg flex items-center justify-center shrink-0">
                <PainPointIcon name={point.iconName} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-base text-gold leading-relaxed">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
