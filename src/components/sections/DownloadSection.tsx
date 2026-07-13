'use client'

import GooglePlayButton from '@/components/ui/GooglePlayButton'

export default function DownloadSection() {
  return (
    <section
      style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}
      id="download"
      aria-labelledby="cta-heading"
    >
      {/* Bottom glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -200, left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 500,
        background: 'radial-gradient(ellipse at center, rgba(224,137,61,0.09) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-livadra">
        {/* CTA card */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)', padding: '72px 60px',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          {/* Top gradient line — signature radiant sweep */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: 'linear-gradient(90deg, transparent, var(--accent), var(--bold), var(--playful), transparent)',
            opacity: 0.6,
          }} />

          {/* Eyebrow */}
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: 20 }}>
            Available now
          </span>

          {/* Heading */}
          <h2 id="cta-heading" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 500, color: 'var(--text)',
            marginBottom: 16, lineHeight: 1.15, letterSpacing: '-0.5px',
          }}>
            Ready to feel more like<br />
            <em className="text-radiant" style={{ fontStyle: 'italic' }}>yourself</em> in every conversation?
          </h2>

          <p style={{ fontSize: 17, color: 'var(--text2)', marginBottom: 44, fontWeight: 300, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Livadra is free to download and built for Android. Texting, live moments, and the conversations that keep unfolding — all in your pocket.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
            <GooglePlayButton variant="solid" size="lg" />
          </div>

          <p style={{ fontSize: 12, color: 'var(--text3)' }}>
            Free to download. Available now on Google Play for Android.
          </p>
        </div>
      </div>
    </section>
  )
}
