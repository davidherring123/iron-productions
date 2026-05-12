'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, defaultViewport } from '@/lib/animations';

const tiers = [
  {
    name: 'Listing Video',
    subtitle: 'Make every property stand out from the moment it hits the market',
    price: '$1,200',
    period: 'Per Listing',
    popular: false,
    note: null,
    cta: 'Book a Listing Shoot',
    features: [
      'Up to 3-hour shoot on location',
      'Horizontal (16:9) cut for MLS & website',
      'Vertical (9:16) cut for Instagram & TikTok',
      'Professional edit with music & color grade',
      'Delivered within 5 business days',
    ],
  },
  {
    name: 'Agent Brand Retainer',
    subtitle: 'Show up every week without lifting a finger',
    price: '$2,000',
    period: 'Per Month — 3-Month Minimum',
    popular: true,
    note: '3-month minimum required. Real brand growth takes a runway, not a month.',
    cta: 'Start Your Retainer',
    features: [
      '8 short-form videos per month',
      '1 content shoot per month (up to 2 hours)',
      'Edited for Instagram Reels & TikTok',
      'Content strategy tailored to your market',
      'You show up — we handle the rest',
    ],
  },
  {
    name: 'Agent Brand Film',
    subtitle: 'The 60–90 second video that answers "why you" before the call',
    price: '$2,500',
    period: 'One-Time Investment',
    popular: false,
    note: null,
    cta: 'Book a Brand Film',
    features: [
      'Half-day on-location shoot',
      'Cinematic edit with music & color grade',
      'Sound design included',
      'One round of revisions',
      'Delivered for web, email signature & social',
    ],
  },
];

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="bg-background px-6 py-24 flex justify-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-5xl w-full">
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#C9A96E]" />
          <p className="text-xs uppercase tracking-widest text-[#C9A96E] font-medium">
            Pricing
          </p>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-foreground mb-14 leading-tight max-w-sm"
        >
          Simple packages. No surprises.
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 items-stretch"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={fadeUp}
              className={`relative flex flex-col p-8 ${
                tier.popular
                  ? 'bg-foreground'
                  : 'border border-divider bg-white'
              }`}
            >
              {tier.popular && (
                <span className="inline-block self-start bg-[#C9A96E] text-foreground text-[10px] uppercase tracking-widest font-semibold px-3 py-1 mb-6">
                  Most Popular
                </span>
              )}

              <h3
                className={`text-lg font-bold mb-2 ${
                  tier.popular ? 'text-background' : 'text-foreground'
                }`}
              >
                {tier.name}
              </h3>

              <p
                className={`text-xs leading-relaxed mb-6 ${
                  tier.popular ? 'text-[#C9A96E]' : 'text-[#C9A96E]'
                }`}
              >
                {tier.subtitle}
              </p>

              <p
                className={`text-4xl font-bold mb-1 ${
                  tier.popular ? 'text-background' : 'text-foreground'
                }`}
              >
                {tier.price}
              </p>
              <p
                className={`text-[10px] uppercase tracking-widest mb-6 ${
                  tier.popular ? 'text-[#C9A96E]' : 'text-[#C9A96E]'
                }`}
              >
                {tier.period}
              </p>

              <div
                className={`w-full h-px mb-6 ${
                  tier.popular ? 'bg-white/10' : 'bg-divider'
                }`}
              />

              <ul className="flex flex-col gap-3 flex-1 mb-6">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`text-xs flex items-start gap-2 leading-relaxed ${
                      tier.popular ? 'text-white/70' : 'text-muted'
                    }`}
                  >
                    <span className="shrink-0 text-[#C9A96E] mt-px">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              {tier.note && (
                <p className="text-[11px] italic text-white/30 mb-6 leading-relaxed">
                  {tier.note}
                </p>
              )}

              <a
                href="#contact"
                className={`text-[11px] font-semibold uppercase tracking-widest text-center py-4 mt-auto transition-opacity hover:opacity-80 ${
                  tier.popular
                    ? 'bg-[#C9A96E] text-foreground'
                    : 'bg-foreground text-background'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
