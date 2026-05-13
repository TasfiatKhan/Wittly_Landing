'use client'

import { motion } from 'framer-motion'

export default function PhoneMockup() {
  return (
    <motion.div
      role="img"
      aria-label="Witly app showing conversation suggestions"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        rotate: -1,
        width: 280,
        background: 'var(--surface)',
        borderRadius: 40,
        border: '1px solid var(--border)',
        boxShadow: '0 0 0 6px rgba(255,255,255,0.03), 0 40px 80px rgba(0,0,0,0.5), 0 8px 24px rgba(196,149,106,0.06)',
        overflow: 'hidden',
      }}
    >
      {/* Notch */}
      <div aria-hidden="true" style={{
        width: 80, height: 24,
        background: 'var(--bg)',
        borderRadius: '0 0 16px 16px',
        margin: '0 auto',
      }} />

      {/* Screen */}
      <div style={{ padding: '0 16px 24px', minHeight: 520, background: 'var(--bg2)' }}>
        {/* Header */}
        <div style={{ padding: '14px 0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, fontWeight: 500, color: 'var(--accent)', background: 'rgba(196,149,106,0.12)', padding: '4px 10px', borderRadius: 100, letterSpacing: '0.05em' }}>
            Texting Mode
          </span>
          <span style={{ fontSize: 11, color: 'var(--text3)' }}>Now</span>
        </div>

        {/* Chat: them */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 10 }}>
          <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '18px 18px 18px 4px', fontSize: 13, lineHeight: 1.5, background: 'var(--surface2)', color: 'var(--text)' }}>
            so we&apos;re all going to Jake&apos;s thing Saturday, you should come
          </div>
          <span style={{ fontSize: 10, color: 'var(--text3)', marginTop: 3, paddingLeft: 4 }}>Jordan, 2 min ago</span>
        </div>

        {/* Chat: me */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginBottom: 10 }}>
          <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '18px 18px 4px 18px', fontSize: 13, lineHeight: 1.5, background: 'var(--accent)', color: '#1A1510', fontWeight: 500 }}>
            might be down — who else is going?
          </div>
          <span style={{ fontSize: 10, color: 'var(--text3)', marginTop: 3, paddingRight: 4 }}>You</span>
        </div>

        {/* Chat: them */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 16 }}>
          <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '18px 18px 18px 4px', fontSize: 13, lineHeight: 1.5, background: 'var(--surface2)', color: 'var(--text)' }}>
            the usual crowd, maybe some of his coworkers too. should be chill
          </div>
        </div>

        {/* AI suggestions card */}
        <div aria-label="Witly suggestions" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 12 }}>
          <div style={{ fontSize: 10, fontWeight: 500, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
            Witly suggests
          </div>

          {[
            { dot: 'var(--safe)', text: "honestly sounds like a good time — I'll come" },
            { dot: 'var(--playful)', text: "sold if there's actual food and not just lukewarm drinks" },
            { dot: 'var(--bold)', text: "already said no to two things this month, I'm contractually obligated to come" },
          ].map((s, i) => (
            <div key={i} role="button" tabIndex={0} style={{
              background: 'var(--bg3)', borderRadius: 10, padding: '9px 11px',
              fontSize: 12, color: 'var(--text)', marginBottom: i < 2 ? 6 : 0,
              cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: 7,
              transition: 'background 0.2s',
            }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot, flexShrink: 0, marginTop: 4 }} />
              <span>{s.text}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
