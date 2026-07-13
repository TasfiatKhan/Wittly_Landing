'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import GooglePlayButton from '@/components/ui/GooglePlayButton'

export default function MidCtaSection() {
  return (
    <section style={{ padding: '20px 0 60px' }} aria-labelledby="mid-cta-heading">
      <div className="container-livadra">
        <AnimatedSection>
          <div style={{
            background: 'linear-gradient(120deg, rgba(224,137,61,0.14), rgba(226,96,74,0.10) 55%, rgba(222,154,174,0.10))',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px 44px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 24,
          }}>
            <div style={{ maxWidth: 440 }}>
              <h3 id="mid-cta-heading" style={{
                fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 500,
                color: 'var(--text)', marginBottom: 8, lineHeight: 1.3,
              }}>
                Carry a little more confidence into every conversation.
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.6, fontWeight: 300 }}>
                Livadra is live on Google Play — free to download, built for Android.
              </p>
            </div>
            <GooglePlayButton variant="solid" size="md" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
