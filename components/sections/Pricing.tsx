'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger, tightViewport } from '@/lib/animations';
import { PRICING_TIERS } from '@/lib/constants';
import SectionEyebrow from '@/components/ui/SectionEyebrow';
import Button from '@/components/ui/Button';

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      className="bg-background px-6 py-24 flex justify-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={tightViewport}
    >
      <div className="max-w-5xl w-full">
        <SectionEyebrow label="Pricing" className="mb-6" />

        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-foreground mb-14 leading-tight max-w-sm font-serif"
        >
          Simple packages. No surprises.
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 items-stretch"
        >
          {PRICING_TIERS.map((tier) => {
            const cardClasses = tier.popular
              ? 'bg-foreground'
              : 'border border-divider bg-white';
            const titleColor = tier.popular ? 'text-background' : 'text-foreground';
            const dividerColor = tier.popular ? 'bg-white/10' : 'bg-divider';
            const featureBorderColor = tier.popular ? 'border-white/10' : 'border-divider';
            const featureTextColor = tier.popular ? 'text-white/70' : 'text-muted';

            return (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                className={`relative flex flex-col p-8 ${cardClasses}`}
              >
                {tier.popular && (
                  <span className="inline-block self-start bg-gold text-foreground text-xs uppercase tracking-widest font-semibold px-3 py-1 mb-6">
                    Most Popular
                  </span>
                )}

                <h3 className={`text-lg font-bold mb-2 ${titleColor}`}>
                  {tier.name}
                </h3>

                <p className="text-sm leading-relaxed mb-6 text-gold">
                  {tier.subtitle}
                </p>

                <p className={`text-4xl font-bold mb-1 ${titleColor}`}>
                  {tier.price}
                </p>
                <p className="text-xs uppercase tracking-widest mb-6 text-gold">
                  {tier.period}
                </p>

                <div className={`w-full h-px mb-6 ${dividerColor}`} />

                <ul className="flex flex-col flex-1 mb-6">
                  {tier.features.map((feature, i) => (
                    <li
                      key={feature}
                      className={`text-sm flex items-start gap-2 leading-relaxed py-3 ${
                        i > 0 ? `border-t ${featureBorderColor}` : ''
                      } ${featureTextColor}`}
                    >
                      <span className="shrink-0 text-gold mt-px">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {tier.note && (
                  <p className="text-xs italic text-white/30 mb-6 leading-relaxed">
                    {tier.note}
                  </p>
                )}

                <Button
                  href="#contact"
                  variant={tier.popular ? 'accent' : 'primary'}
                  size="md"
                  fullWidth
                  className="mt-auto"
                >
                  {tier.cta}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
