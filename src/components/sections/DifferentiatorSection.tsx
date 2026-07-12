'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const features = [
  {
    emoji: '🧠',
    title: 'Emotionally calibrated',
    desc: 'Livadra understands relationship context, social dynamics, and anxiety levels — not just your words.',
  },
  {
    emoji: '🎭',
    title: 'Three tones, always',
    desc: "Every situation gets a warm option, a playful option, and a bolder option. You're always in control of the energy.",
  },
  {
    emoji: '🪴',
    title: 'Memory over time',
    desc: "Moments mode tracks ongoing conversations so Livadra never needs you to re-explain who someone is.",
  },
  {
    emoji: '🔇',
    title: 'Low cringe, always',
    desc: "No try-hard lines. No pickup-artist energy. Nothing you'd be embarrassed to send. Our cringe filter is built into every response.",
  },
]

export default function DifferentiatorSection() {
  return (
    <section style={{ padding: '80px 0' }} aria-labelledby="features-heading">
      <div className="container-livadra">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 52 }}>
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>What makes it different</span>
          <h2 className="section-title" id="features-heading" style={{ textAlign: 'center' }}>
            Intelligence that feels <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>human</em>
          </h2>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(196,149,106,0.2)', transition: { duration: 0.2 } }}
              style={{
                padding: '28px 24px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)',
                transition: 'transform 0.25s, border-color 0.25s',
              }}
            >
              <span aria-hidden="true" style={{ fontSize: 26, marginBottom: 14, display: 'block' }}>{f.emoji}</span>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', marginBottom: 6 }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.55 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
