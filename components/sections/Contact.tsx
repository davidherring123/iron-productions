'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';
import { COMPANY, CONTACT_PACKAGES } from '@/lib/constants';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/FormField';

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
        <SectionEyebrow label="Get in Touch" className="mb-6" />

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-foreground mb-3 font-serif"
        >
          Ready to start?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-base text-muted mb-10 leading-relaxed">
          Tell us about yourself and what you&apos;re looking for. We&apos;ll get back to you
          within {COMPANY.responseWindow}.
        </motion.p>

        <motion.form
          variants={stagger}
          className="flex flex-col gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
            <FormField
              name="name"
              label="Name"
              placeholder="Jane Smith"
              className="flex-1"
            />
            <FormField
              name="email"
              label="Email"
              type="email"
              placeholder="jane@brokerage.com"
              className="flex-1"
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <FormField
              as="select"
              name="package"
              label="Package"
              options={CONTACT_PACKAGES}
              placeholderOption="Select a package..."
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <FormField
              as="textarea"
              name="goals"
              label="Your Goals"
              rows={5}
              placeholder="What are you trying to accomplish?"
            />
          </motion.div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            variants={fadeUp}
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </motion.section>
  );
}
