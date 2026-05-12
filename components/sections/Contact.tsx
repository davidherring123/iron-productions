'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const packages = [
  'Listing Video',
  'Agent Brand Retainer',
  'Agent Brand Film',
  "Not sure yet",
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {/* Mobile: full width | Desktop: constrained centered */}
      <div className="max-w-xl w-full">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-muted mb-4"
        >
          Get Started
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-foreground mb-4"
        >
          Book a Free Consultation
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted mb-12">
          Tell us about your goals and we'll put together a plan that fits.
        </motion.p>

        <motion.form
          variants={stagger}
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-6"
          >
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-muted">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="border border-divider rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors bg-transparent"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-muted">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border border-divider rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors bg-transparent"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-muted">
              Package
            </label>
            <select className="border border-divider rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors bg-transparent appearance-none cursor-pointer">
              <option value="">Select a package</option>
              {packages.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-muted">
              Your Goals
            </label>
            <textarea
              rows={4}
              placeholder="What are you hoping to achieve?"
              className="border border-divider rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors bg-transparent resize-none"
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            type="submit"
            className="bg-foreground text-background text-sm font-medium py-4 rounded-full hover:opacity-75 transition-opacity"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
