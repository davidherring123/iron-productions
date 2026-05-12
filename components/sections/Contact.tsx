'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const packages = [
  'Listing Video',
  'Agent Brand Retainer',
  'Agent Brand Film',
  'Not sure yet',
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-background px-6 py-24 flex justify-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-2xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-gold" />
          <p className="text-xs uppercase tracking-widest text-gold font-medium">
            Get in Touch
          </p>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-foreground mb-3 font-serif"
        >
          Ready to start?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-muted mb-10 leading-relaxed">
          Tell us about yourself and what you&apos;re looking for. We&apos;ll get back to you
          within 48 hours.
        </motion.p>

        <motion.form
          variants={stagger}
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-muted">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="border border-divider px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/40 transition-colors bg-transparent"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-muted">
                Email
              </label>
              <input
                type="email"
                placeholder="jane@brokerage.com"
                className="border border-divider px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/40 transition-colors bg-transparent"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-muted">
              Package
            </label>
            <select className="border border-divider px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors bg-background appearance-none cursor-pointer">
              <option value="">Select a package...</option>
              {packages.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest text-muted">
              Your Goals
            </label>
            <textarea
              rows={5}
              placeholder="What are you trying to accomplish?"
              className="border border-divider px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-foreground/40 transition-colors bg-transparent resize-none"
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            type="submit"
            className="bg-foreground text-background text-xs font-semibold uppercase tracking-widest py-5 hover:opacity-80 transition-opacity"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
