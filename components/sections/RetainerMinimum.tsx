'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

export default function RetainerMinimum() {
  return (
    <motion.section
      id="retainer-minimum"
      className="bg-white px-6 py-20 flex justify-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          variants={fadeUp}
          className="shrink-0 leading-none select-none"
        >
          <span className="text-[9rem] md:text-[11rem] font-bold text-foreground/10 leading-none">
            3
          </span>
        </motion.div>
        <div className="text-center md:text-left">
          <motion.h3
            variants={fadeUp}
            className="text-2xl md:text-3xl font-bold text-foreground mb-5 leading-snug"
          >
            Why we require a 3-month minimum on retainers
          </motion.h3>
          <motion.p variants={fadeUp} className="text-sm text-muted leading-relaxed">
            Real estate is a relationship business. New clients don&apos;t come in week
            two — they come after they&apos;ve seen you consistently, trusted your face,
            and felt like they already know you. A 3-month runway gives your content
            enough time to actually work. We&apos;re not interested in taking your money
            for a month and leaving. We&apos;re interested in building something that
            compounds.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
