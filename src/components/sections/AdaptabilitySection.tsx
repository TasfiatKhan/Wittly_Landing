'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const contexts = [
  'Work happy hour',
  'Dating in your city',
  'Group chat chaos',
  'Networking at 11pm',
  'Awkward family dinner',
  'New friendship, early days',
  'First date lull',
  'Reconnecting after months',
  'Tricky coworker',
  'Friend group tension',
  'Post-breakup texting',
  'Social anxiety, real-time',
]

export default function AdaptabilitySection() {
  return (
    <section style={{ padding: '110px 0' }} aria-label="Built for everywhere">
      <div className="container-livadra">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>
            Built for everywhere
          </span>
          <h2
            className="section-title"
            style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 20px' }}
          >
            Conversations are human everywhere.
          </h2>
          <p className="section-lead" style={{ margin: '0 auto', textAlign: 'center', maxWidth: 520 }}>
            Livadra adapts naturally across languages, humor styles, and social dynamics —
            helping conversations feel more natural in your own voice.
          </p>
        </AnimatedSection>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          {contexts.map((ctx, i) => (
            <motion.span
              key={ctx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'inline-block',
                padding: '9px 18px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 100,
                fontSize: 13,
                color: 'var(--text3)',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              {ctx}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
