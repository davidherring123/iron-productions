'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const painPoints = [
  {
    title: 'No Time to Create Content',
    body: "You're focused on closing deals. We handle every frame so you don't have to.",
  },
  {
    title: 'Invisible Online',
    body: 'Stand out in a crowded market with professional video that gets you seen.',
  },
  {
    title: 'Leads Going Cold',
    body: 'Nurture prospects automatically with content that builds trust before the call.',
  },
  {
    title: 'Weak Listing Presentations',
    body: 'Win more listings by showing sellers what professional media looks like.',
  },
];

export default function BuiltForYou() {
  return (
    <motion.section
      id="built-for-you"
      className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-6xl w-full">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-muted mb-4"
        >
          Why Iron Productions
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-foreground mb-16"
        >
          Built for You
        </motion.h2>

        {/* Mobile: 1 col | Desktop: 2x2 grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              className="border border-divider rounded-2xl p-8"
            >
              <h3 className="text-base font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
