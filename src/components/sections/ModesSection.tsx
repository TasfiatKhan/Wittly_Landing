'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const modes = [
  {
    id: 'texting',
    emoji: '💬',
    label: 'Texting Mode',
    labelColor: 'var(--safe)',
    labelBg: 'rgba(90,143,107,0.12)',
    iconBg: 'rgba(90,143,107,0.12)',
    hoverBorder: 'rgba(90,143,107,0.35)',
    topBar: 'linear-gradient(90deg, var(--safe), transparent)',
    dotColor: 'var(--safe)',
    headline: 'Quick, thoughtful replies',
    description: "Describe the situation. Get three options back — each with a different energy. You pick what feels right, copy, send.",
    useCases: [
      "The text you've been staring at for 20 minutes",
      'A weird message from a coworker',
      'Early stage of dating someone new',
      "Group chat you can't read the vibe on",
    ],
  },
  {
    id: 'live',
    emoji: '🎙️',
    label: 'Live Mode',
    labelColor: 'var(--bold)',
    labelBg: 'rgba(226,96,74,0.12)',
    iconBg: 'rgba(226,96,74,0.12)',
    hoverBorder: 'rgba(226,96,74,0.35)',
    topBar: 'linear-gradient(90deg, var(--bold), transparent)',
    dotColor: 'var(--bold)',
    headline: 'Real-time support',
    description: "Tap once, speak your situation. In seconds, you have something glanceable — a line, a redirect, a way out of the awkward corner you've backed into.",
    useCases: [
      'A party where you know no one',
      'An awkward silence you need to fill',
      'Networking event, stuck mid-pitch',
      'First date lull you want to recover',
    ],
  },
  {
    id: 'moments',
    emoji: '🌿',
    label: 'Moments',
    labelColor: 'var(--playful)',
    labelBg: 'rgba(222,154,174,0.12)',
    iconBg: 'rgba(222,154,174,0.12)',
    hoverBorder: 'rgba(222,154,174,0.35)',
    topBar: 'linear-gradient(90deg, var(--playful), transparent)',
    dotColor: 'var(--playful)',
    headline: 'Ongoing context, no re-explaining',
    description: "For the situations that keep unfolding. Livadra remembers the history, the person, the tone you've been setting — and helps you continue naturally, not from scratch.",
    useCases: [
      "A new friendship you're still calibrating",
      'Slow-burn conversation with someone you like',
      'Reconnecting after a long silence',
      'A tricky dynamic with a friend group',
    ],
  },
]

export default function ModesSection() {
  return (
    <section style={{ padding: '100px 0' }} id="modes" aria-labelledby="modes-heading">
      <div className="container-livadra">
        <AnimatedSection className="text-center" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>Three modes</span>
          <h2 className="section-title" id="modes-heading" style={{ textAlign: 'center' }}>
            Built for every kind of moment
          </h2>
          <p className="section-lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            Social life doesn&apos;t fit into one box. Livadra has three distinct modes, each designed for where you actually are.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }} role="list">
          {modes.map((mode, i) => (
            <motion.article
              key={mode.id}
              role="listitem"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', padding: '36px 32px',
                position: 'relative', overflow: 'hidden',
                cursor: 'default',
                transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s',
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 24px 60px rgba(43,27,32,0.28)',
                borderColor: mode.hoverBorder,
                transition: { duration: 0.2 },
              }}
            >
              {/* Top color bar (shown on hover via CSS would need JS, show always at low opacity) */}
              <div aria-hidden="true" style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: mode.topBar, opacity: 0.6,
              }} />

              {/* Icon */}
              <div aria-hidden="true" style={{
                width: 52, height: 52, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, background: mode.iconBg, marginBottom: 24,
              }}>
                {mode.emoji}
              </div>

              {/* Badge */}
              <span style={{
                display: 'inline-block', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '4px 10px', borderRadius: 100, marginBottom: 12,
                color: mode.labelColor, background: mode.labelBg,
              }}>
                {mode.label}
              </span>

              {/* Headline */}
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500, color: 'var(--text)', marginBottom: 12, lineHeight: 1.2 }}>
                {mode.headline}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 24, fontWeight: 300 }}>
                {mode.description}
              </p>

              {/* Use cases */}
              <ul aria-label="Use cases" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {mode.useCases.map((uc) => (
                  <li key={uc} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text3)' }}>
                    <span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: '50%', background: mode.dotColor, flexShrink: 0 }} />
                    {uc}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
