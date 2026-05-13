'use client'

import { useState } from 'react'

type State = 'idle' | 'loading' | 'success' | 'error'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<State>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@')) {
      setState('error')
      return
    }
    setState('loading')
    // TODO: POST to your email service API
    await new Promise((r) => setTimeout(r, 1000))
    setState('success')
  }

  return (
    <section
      style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}
      id="waitlist"
      aria-labelledby="cta-heading"
    >
      {/* Bottom glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -200, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 500,
        background: 'radial-gradient(ellipse at center, rgba(196,149,106,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-witly">
        {/* CTA card */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)', padding: '72px 60px',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          {/* Top gradient line */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 1,
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
            opacity: 0.4,
          }} />

          {/* Eyebrow */}
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 20 }}>
            Early access
          </span>

          {/* Heading */}
          <h2 id="cta-heading" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 500, color: 'var(--text)',
            marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.5px',
          }}>
            Ready to feel more like<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>yourself</em> in every conversation?
          </h2>

          <p style={{ fontSize: 17, color: 'var(--text2)', marginBottom: 44, fontWeight: 300, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Join the waitlist. We&apos;re letting in small batches — early users help shape how Witly evolves.
          </p>

          {state === 'success' ? (
            <div style={{
              display: 'inline-block', textAlign: 'center',
              padding: '16px 24px',
              background: 'rgba(90,143,107,0.10)', border: '1px solid rgba(90,143,107,0.25)',
              borderRadius: 100, fontSize: 14, color: 'var(--safe)',
              maxWidth: 440,
            }} role="alert">
              ✓ You&apos;re on the list — we&apos;ll be in touch soon.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              role="form"
              aria-label="Join the waitlist"
              style={{ display: 'flex', gap: 10, maxWidth: 440, margin: '0 auto 20px', flexWrap: 'wrap' }}
              noValidate
            >
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <input
                type="email"
                id="waitlist-email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle') }}
                autoComplete="email"
                aria-required="true"
                aria-invalid={state === 'error'}
                disabled={state === 'loading'}
                required
                style={{
                  flex: 1, minWidth: 200,
                  background: 'var(--bg3)', border: `1px solid ${state === 'error' ? 'rgba(184,92,74,0.5)' : 'var(--border)'}`,
                  borderRadius: 100, padding: '13px 20px',
                  fontSize: 14, color: 'var(--text)',
                  outline: 'none', fontFamily: 'var(--font-sans)',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(196,149,106,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = state === 'error' ? 'rgba(184,92,74,0.5)' : 'var(--border)')}
              />
              <button
                type="submit"
                disabled={state === 'loading'}
                style={{
                  background: 'var(--accent)', color: '#1A1510',
                  fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
                  padding: '13px 24px', borderRadius: 100, border: 'none',
                  cursor: state === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s, transform 0.2s',
                  whiteSpace: 'nowrap', opacity: state === 'loading' ? 0.7 : 1,
                }}
                onMouseEnter={e => { if (state !== 'loading') { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {state === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}

          <p style={{ fontSize: 12, color: 'var(--text3)' }}>
            No spam. No pitch emails. Just an invite when your spot opens up.
          </p>
        </div>
      </div>
    </section>
  )
}
