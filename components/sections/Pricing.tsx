'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const tiers = [
  {
    name: 'Listing Video',
    price: '$1,200',
    period: 'per listing',
    popular: false,
    features: [
      'Professionally edited listing video',
      'Aerial drone footage',
      'Licensed background music',
      'Social-ready cut included',
      '48-hour turnaround',
    ],
  },
  {
    name: 'Agent Brand Retainer',
    price: '$2,000',
    period: '/month · 3-month minimum',
    popular: true,
    features: [
      'Everything in Listing Video',
      'Monthly brand content shoot',
      'Social media content calendar',
      'Short-form video edits',
      'Dedicated account manager',
      'Unlimited revisions',
    ],
  },
  {
    name: 'Agent Brand Film',
    price: '$2,500',
    period: 'one-time',
    popular: false,
    features: [
      'Full-day cinematic shoot',
      'Professional scriptwriting',
      '2–4 minute brand film',
      'Cutdown versions for social',
      'Full usage rights',
    ],
  },
];

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-24"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-6xl w-full">
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-widest text-muted mb-4"
        >
          Pricing
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold text-foreground mb-16"
        >
          Packages
        </motion.h2>

        {/* Mobile: stacked | Desktop: 3 columns */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.popular
                  ? 'bg-foreground'
                  : 'border border-divider'
              }`}
            >
              {tier.popular && (
                <span className="absolute top-6 right-6 text-xs uppercase tracking-widest bg-background text-foreground px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <p
                className={`text-sm font-medium mb-6 ${
                  tier.popular ? 'text-white/60' : 'text-muted'
                }`}
              >
                {tier.name}
              </p>

              <p
                className={`text-4xl font-semibold mb-1 ${
                  tier.popular ? 'text-background' : 'text-foreground'
                }`}
              >
                {tier.price}
              </p>
              <p
                className={`text-xs mb-8 ${
                  tier.popular ? 'text-white/40' : 'text-muted'
                }`}
              >
                {tier.period}
              </p>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex items-start gap-2 ${
                      tier.popular ? 'text-white/70' : 'text-muted'
                    }`}
                  >
                    <span className="mt-px shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-sm font-medium text-center py-3.5 rounded-full transition-opacity hover:opacity-75 ${
                  tier.popular
                    ? 'bg-background text-foreground'
                    : 'bg-foreground text-background'
                }`}
              >
                Book now
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
