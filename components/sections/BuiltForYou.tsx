'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const painPoints = [
  {
    title: 'You know you need video',
    body: "But filming, editing, and posting consistently feels impossible on top of everything else you're managing.",
    icon: (
      // Video camera
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1" y="5" width="11" height="10" rx="1.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8l6-3v10l-6-3" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "You're blending into the feed",
    body: 'Your competitors are posting the same headshots. One well-produced brand film separates you before a single conversation.',
    icon: (
      // Overlapping people / crowd
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="7" cy="7" r="3" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M1 17c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="6" r="2.5" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M17 16c0-2.5-1.5-4-3.5-4.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Leads go cold before they call',
    body: "Buyers and sellers research before they reach out. If they can't find you online, they'll find someone else.",
    icon: (
      // Phone
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5.5 2h3l1.5 4-2 1.5a9 9 0 0 0 4.5 4.5L14 10l4 1.5v3A1.5 1.5 0 0 1 16.5 16C8.5 16 4 11.5 4 3.5A1.5 1.5 0 0 1 5.5 2z"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Your listings deserve better',
    body: 'Professional listing video drives more showings, faster closes, and higher perceived value — it pays for itself.',
    icon: (
      // House
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 9.5L10 3l7 6.5V17a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 18v-6h6v6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
          <span className="w-8 h-px bg-gold" />
          <p className="text-xs uppercase tracking-widest text-gold font-medium">
            Built for You
          </p>
        </motion.div>

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
                <p className="text-sm text-gold leading-relaxed">{point.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
