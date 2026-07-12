'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const problems = [
  {
    icon: '💬',
    title: "You know what you feel, not what to say",
    desc: "The thought is clear. The words aren't. Livadra helps you translate the feeling into something you'd actually send.",
  },
  {
    icon: '🪞',
    title: 'You replay it in your head for hours',
    desc: 'After the awkward moment at the party. After the weird silence with your coworker. Livadra helps you move through it, not stew in it.',
  },
  {
    icon: '🧩',
    title: "You're funny — just not always in the moment",
    desc: 'The best comeback arrives at midnight. Livadra brings it to you when it actually counts.',
  },
]

const thoughtBubbles = [
  { text: '"wait did that come across weird"', faded: false },
  { text: '"should I send a follow-up or does that make it worse"', faded: false },
  { text: '"why am I like this"', faded: true },
  { text: '"okay new plan: never text anyone again"', faded: true },
]

export default function ProblemSection() {
  return (
    <section style={{ padding: '100px 0' }} id="how-it-works" aria-labelledby="problem-heading">
      <div className="container-livadra">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'center' }}>
          {/* Left: copy */}
          <div>
            <AnimatedSection>
              <span className="section-eyebrow">Why Livadra</span>
              <h2 className="section-title" id="problem-heading">
                Some conversations are just <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>hard.</em>
              </h2>
              <p className="section-lead" style={{ marginBottom: 36 }}>
                The overthinking, the re-reads, the three drafts you deleted. Most of us navigate social situations more anxiously than we let on. Livadra doesn&apos;t replace your voice — it helps you find it.
              </p>
            </AnimatedSection>

            <ul aria-label="Situations Livadra helps with" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {problems.map((p, i) => (
                <AnimatedSection key={p.title} delay={0.1 * (i + 1)}>
                  <li style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    padding: '18px 20px',
                    background: 'var(--surface)', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(196,149,106,0.25)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <span aria-hidden="true" style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>{p.icon}</span>
                    <div>
                      <h4 style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', marginBottom: 3 }}>{p.title}</h4>
                      <p style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.5 }}>{p.desc}</p>
                    </div>
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>

          {/* Right: anxiety card */}
          <AnimatedSection direction="left" className="hidden md:flex justify-center" aria-hidden="true">
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 28, width: 320,
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}>
              <div style={{ fontSize: 12, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>
                The spiral — before Livadra
              </div>

              {thoughtBubbles.map((b, i) => (
                <div key={i} style={{
                  background: 'var(--bg3)', borderRadius: 12,
                  padding: '14px 16px',
                  fontSize: 14, fontStyle: 'italic',
                  color: 'var(--text2)', marginBottom: 10,
                  lineHeight: 1.6, borderLeft: '3px solid var(--border)',
                  opacity: b.faded ? 0.45 : 1,
                }}>
                  {b.text}
                </div>
              ))}

              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 10 }}>After Livadra</div>
                <div style={{
                  background: 'rgba(90,143,107,0.08)', border: '1px solid rgba(90,143,107,0.2)',
                  borderRadius: 10, padding: '12px 14px',
                  fontSize: 13, color: '#7BBF8A',
                }}>
                  You picked the warm option. It landed. ✓
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
