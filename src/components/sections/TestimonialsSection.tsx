'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const testimonials = [
  {
    initial: 'M',
    name: 'Mara W.',
    role: 'Beta user · Designer',
    quote: "I have social anxiety and there's this running assumption that you'll just… figure it out. Livadra doesn't judge the question. It just helps. The playful option in Texting Mode feels more like me than anything I'd come up with on my own.",
  },
  {
    initial: 'T',
    name: 'Theo R.',
    role: 'Beta user · Product Manager',
    quote: "I used Live Mode at an industry dinner. Whispered my situation in the bathroom, glanced at the suggestion before walking back in. It was embarrassingly useful. The whole table laughed at the thing it gave me.",
  },
  {
    initial: 'P',
    name: 'Priya K.',
    role: 'Beta user · Writer',
    quote: "I reconnected with a close friend after a long, weird gap. I used Moments to keep track of what we'd talked about and how things stood. It helped me not say the wrong thing at the wrong time. We're genuinely closer now.",
  },
]

export default function TestimonialsSection() {
  return (
    <section style={{ padding: '100px 0' }} aria-labelledby="testimonials-heading">
      <div className="container-livadra">
        <AnimatedSection style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center' }}>Early access users</span>
          <h2 className="section-title" id="testimonials-heading" style={{ textAlign: 'center' }}>
            How it&apos;s actually been used
          </h2>
          <p className="section-lead" style={{ margin: '0 auto', textAlign: 'center' }}>
            We&apos;re in early access. These are real moments from our beta users.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, borderColor: 'rgba(196,149,106,0.2)', transition: { duration: 0.2 } }}
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-lg)', padding: 28,
                display: 'flex', flexDirection: 'column', gap: 16,
                transition: 'transform 0.25s, border-color 0.25s',
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 3 }} aria-label="5 stars">
                {Array(5).fill(null).map((_, i) => (
                  <span key={i} aria-hidden="true" style={{ color: 'var(--gold)', fontSize: 13 }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontSize: 14, color: 'var(--text2)', lineHeight: 1.7,
                fontStyle: 'italic', fontWeight: 300, flex: 1,
                margin: 0,
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div aria-hidden="true" style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: 'var(--surface2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 500, color: 'var(--accent)',
                  border: '1px solid var(--border)', flexShrink: 0,
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text3)' }}>{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
