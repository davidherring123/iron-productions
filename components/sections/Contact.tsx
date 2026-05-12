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
      className="min-h-screen flex flex-col items-center justify-center bg-foreground px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      <div className="max-w-xl w-full">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-white/40 mb-4"
        >
          Get Started
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-background mb-4"
        >
          Book a Free Consultation
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/50 mb-12">
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
              <label className="text-xs uppercase tracking-wider text-white/40">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="border border-white/10 px-4 py-3 text-sm text-background placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors bg-transparent"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-white/40">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border border-white/10 px-4 py-3 text-sm text-background placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors bg-transparent"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-white/40">
              Package
            </label>
            <select className="border border-white/10 px-4 py-3 text-sm text-background focus:outline-none focus:border-white/40 transition-colors bg-transparent appearance-none cursor-pointer">
              <option value="" className="bg-foreground">Select a package</option>
              {packages.map((p) => (
                <option key={p} value={p} className="bg-foreground">
                  {p}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-wider text-white/40">
              Your Goals
            </label>
            <textarea
              rows={4}
              placeholder="What are you hoping to achieve?"
              className="border border-white/10 px-4 py-3 text-sm text-background placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors bg-transparent resize-none"
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            type="submit"
            className="bg-background text-foreground text-sm font-medium py-4  hover:opacity-75 transition-opacity"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
