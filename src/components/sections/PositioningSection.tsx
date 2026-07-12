'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const notList = [
  'A rizz app',
  'A pickup line generator',
  'A dating coach that tells you what to say',
  'Generic AI hype',
]

const isList = [
  'A social intelligence tool for real humans',
  'Calibrated, low-cringe, emotionally aware',
  'Built for the full spectrum of social life',
  'A second opinion, not a script',
]

export default function PositioningSection() {
  return (
    <section className="bg-warm-100 py-16 md:py-20" aria-label="Product positioning">
      <div className="section-container">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-warm-500 mb-4">
            Let&apos;s be clear
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-warm-900 leading-tight">
            Livadra isn&apos;t here to hand you lines.
            <br />
            <span style={{ color: '#C4956A' }}>It&apos;s here to help you think.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-warm-600 leading-relaxed text-pretty">
            Most apps tell you exactly what to say. Livadra gives you options, calibrated to your
            situation and your personality, and lets you decide. Because the best response is
            still the one that sounds like you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* NOT column */}
          <AnimatedSection delay={0.1}>
            <div
              className="rounded-3xl p-6 md:p-8 h-full"
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(213,204,196,0.6)',
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="flex items-center justify-center text-warm-500 font-bold"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#EAE5DF',
                    fontSize: 14,
                  }}
                >
                  ✕
                </div>
                <p className="text-sm font-semibold text-warm-600 uppercase tracking-wider">
                  Livadra is NOT
                </p>
              </div>
              <ul className="space-y-3">
                {notList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-warm-600">
                    <span className="mt-0.5 text-warm-400 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* IS column */}
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-3xl p-6 md:p-8 h-full"
              style={{
                background: 'rgba(196,149,106,0.06)',
                border: '1px solid rgba(196,149,106,0.20)',
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="flex items-center justify-center text-white font-bold"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: '#C4956A',
                    fontSize: 14,
                  }}
                >
                  ✓
                </div>
                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: '#C4956A' }}
                >
                  Livadra IS
                </p>
              </div>
              <ul className="space-y-3">
                {isList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-warm-700">
                    <span className="mt-0.5 shrink-0" style={{ color: '#C4956A' }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* Pull quote */}
        <AnimatedSection delay={0.3} className="max-w-2xl mx-auto mt-12 text-center">
          <blockquote
            className="font-serif text-xl md:text-2xl text-warm-700 leading-relaxed"
            style={{ fontStyle: 'italic' }}
          >
            &ldquo;Sometimes you just need a socially intelligent friend who&apos;s been
            in a lot of situations and has good judgment.&rdquo;
          </blockquote>
          <p className="mt-3 text-sm text-warm-500">— The idea behind Livadra</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
