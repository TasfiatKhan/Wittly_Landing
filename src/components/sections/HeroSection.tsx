'use client'

import { motion } from 'framer-motion'
import PhoneMockup from '@/components/ui/PhoneMockup'

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.11 } } },
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  },
}

const trustItems = [
  'No pickup-line energy',
  'Context-aware, not scripted',
  'Sounds like you',
]

export default function HeroSection() {
  return (
    <section
      aria-label="Hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '140px 0 100px', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glows */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 600,
        background: 'radial-gradient(ellipse at center, rgba(196,149,106,0.11) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -100, right: -200,
        width: 500, height: 400,
        background: 'radial-gradient(ellipse at center, rgba(196,149,106,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-witly" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Left: copy */}
          <motion.div variants={stagger.container} initial="hidden" animate="show">
            {/* Eyebrow */}
            <motion.div variants={stagger.item}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--accent)', background: 'rgba(196,149,106,0.10)',
                border: '1px solid rgba(196,149,106,0.2)', padding: '6px 14px', borderRadius: 100,
                marginBottom: 28,
              }}>
                <span className="animate-pulse-dot" aria-hidden="true" style={{
                  width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%',
                  animation: 'pulse-dot 2s ease-in-out infinite',
                }} />
                Now in Early Access
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={stagger.item} style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(38px, 5vw, 60px)',
              fontWeight: 500, lineHeight: 1.12, letterSpacing: '-1px',
              color: 'var(--text)', marginBottom: 24,
            }}>
              Never run out of things<br />
              to <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>say</em> again.
            </motion.h1>

            {/* Subhead */}
            <motion.p variants={stagger.item} style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text2)', marginBottom: 44, maxWidth: 480, fontWeight: 300 }}>
              Witly is your AI social copilot — helping you navigate conversations with more ease, warmth, and confidence. Texting, in-person, ongoing. Whatever the moment calls for.
            </motion.p>

            {/* Actions */}
            <motion.div variants={stagger.item} style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 60 }}>
              <a href="#waitlist" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--accent)', color: '#1A1510',
                fontSize: 15, fontWeight: 500, padding: '14px 28px', borderRadius: 100,
                boxShadow: '0 4px 24px rgba(196,149,106,0.2)',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--accent2)'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 32px rgba(196,149,106,0.3)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'var(--accent)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 24px rgba(196,149,106,0.2)' }}
              >
                <span>Get Early Access</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#modes" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: 'var(--text2)',
                fontSize: 15, fontWeight: 400, padding: '14px 24px', borderRadius: 100,
                border: '1px solid var(--border)',
                transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.color = 'var(--text)'; el.style.borderColor = 'rgba(196,149,106,0.3)'; el.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.color = 'var(--text2)'; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)' }}
              >
                <span>See how it works</span>
              </a>
            </motion.div>

            {/* Trust items */}
            <motion.div variants={stagger.item} style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              {trustItems.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--text3)' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M12 4L5.5 10.5 2 7" stroke="#5A8F6B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: phone + floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              <PhoneMockup />

              {/* Left badge */}
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden lg:block"
                style={{
                  position: 'absolute', left: -80, top: '30%',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '10px 14px', fontSize: 12,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ fontSize: 16, marginBottom: 2 }}>💬</div>
                <div style={{ color: 'var(--text3)', fontSize: 10 }}>Tone</div>
                <div style={{ color: 'var(--text)', fontWeight: 500 }}>Warm &amp; casual</div>
              </motion.div>

              {/* Right badge */}
              <motion.div
                aria-hidden="true"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                className="hidden lg:block"
                style={{
                  position: 'absolute', right: -70, top: '55%',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '10px 14px', fontSize: 12,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div style={{ fontSize: 16, marginBottom: 2 }}>✓</div>
                <div style={{ color: 'var(--text3)', fontSize: 10 }}>Cringe level</div>
                <div style={{ color: 'var(--text)', fontWeight: 500 }}>None detected</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
