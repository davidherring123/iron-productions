'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const painPoints = [
  {
    title: 'You know you need video',
    body: "But filming, editing, and posting consistently feels impossible on top of everything else you're managing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="4" fill="#3B82F6" />
        <polygon points="7,5 16,10 7,15" fill="white" />
      </svg>
    ),
  },
  {
    title: "You're blending into the feed",
    body: 'Your competitors are posting the same headshots. One well-produced brand film separates you before a single conversation.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="10" y="1" width="12.73" height="12.73" rx="1" transform="rotate(45 10 1)" stroke="#1a1a1a" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Leads go cold before they call',
    body: "Buyers and sellers research before they reach out. If they can't find you online, they'll find someone else.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8.5" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4.5" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="1.5" fill="#1a1a1a" />
      </svg>
    ),
  },
  {
    title: 'Your listings deserve better',
    body: 'Professional listing video drives more showings, faster closes, and higher perceived value — it pays for itself.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="10" y="1" width="12.73" height="12.73" rx="1" transform="rotate(45 10 1)" stroke="#1a1a1a" strokeWidth="1.5" />
      </svg>
    ),
  },
];

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
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#C9A96E]" />
          <p className="text-xs uppercase tracking-widest text-[#C9A96E] font-medium">
            Built for You
          </p>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-foreground mb-16 max-w-xl leading-tight"
        >
          Most agents are invisible online. We fix that.
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-divider"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              className={`p-8 flex flex-col gap-6 ${
                i < painPoints.length - 1 ? 'md:border-r border-divider' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#f0ede8] flex items-center justify-center shrink-0">
                {point.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
