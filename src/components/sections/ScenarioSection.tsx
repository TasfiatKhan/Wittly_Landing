'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'

const scenarios = [
  {
    emoji: '💼',
    title: 'The weird coworker message',
    desc: 'Your manager forwards something passive-aggressive. You need to respond professionally without being a pushover.',
    situation: 'Your manager just CC\'d you on an email saying "wanted to loop you in since this keeps coming up" about a project you weren\'t late on.',
    options: [
      { color: 'var(--safe)', text: 'Thanks for looping me in. From what I\'m tracking, we\'re on schedule — but let me know if there\'s something I should double-check.', type: 'Warm · Professionally grounded' },
      { color: 'var(--playful)', text: 'Thanks for flagging — I think we\'re actually in good shape, but I might be missing context. Quick sync sometime today?', type: 'Collegial · Invites clarity' },
      { color: 'var(--bold)', text: 'Can you share what specifically has been coming up? Want to make sure I\'m not missing something.', type: 'Direct · Asks for specifics' },
    ],
  },
  {
    emoji: '🥂',
    title: "Networking, and you're stuck",
    desc: "You're at an industry event. You've introduced yourself. Now the conversation has stalled and you can't think of what's next.",
    situation: "You're at a design industry mixer. You've been talking to someone for 5 minutes. The conversation just hit a wall and you both looked at your drinks.",
    options: [
      { color: 'var(--safe)', text: 'Are you working on anything you\'re actually excited about right now, or is it mostly client work?', type: 'Warm · Invites real talk' },
      { color: 'var(--playful)', text: "What's your honest take on this event? Good use of a Wednesday?", type: 'Playful · Builds instant rapport' },
      { color: 'var(--bold)', text: "What's something you wish people asked you more at things like this?", type: 'Curious · Memorable' },
    ],
  },
  {
    emoji: '🌙',
    title: 'The 3-day text gap',
    desc: "You really like this person. There's been radio silence. You want to reach back out without seeming desperate or overly casual.",
    situation: "You matched with someone 10 days ago, had a good back-and-forth for two days, then both went quiet. You want to restart it naturally.",
    options: [
      { color: 'var(--safe)', text: "okay resurfacing from my life being temporarily chaotic — how's your week been?", type: 'Light · Honest · No awkward explanation' },
      { color: 'var(--playful)', text: 'sorry I disappeared — life got loud for a minute. still thinking about what you said though', type: 'Personal · Shows you were listening' },
      { color: 'var(--bold)', text: "hi, I've been bad at this — are you still down to meet sometime?", type: "Confident · Cuts straight to it" },
    ],
  },
]

export default function ScenarioSection() {
  const [active, setActive] = useState(0)

  return (
    <section style={{ padding: '100px 0' }} id="stories" aria-labelledby="scenarios-heading">
      <div className="container-livadra">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 80, alignItems: 'start' }}>
          {/* Left: tabs */}
          <div>
            <AnimatedSection>
              <span className="section-eyebrow">Real situations</span>
              <h2 className="section-title" id="scenarios-heading">See it in action</h2>
              <p className="section-lead" style={{ marginBottom: 36 }}>
                These aren&apos;t edge cases. They&apos;re Tuesday.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div role="tablist" aria-label="Scenario examples" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {scenarios.map((s, i) => (
                  <div
                    key={s.title}
                    role="tab"
                    aria-selected={i === active}
                    tabIndex={0}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
                    style={{
                      padding: '18px 22px',
                      borderRadius: 'var(--radius)',
                      border: `1px solid ${i === active ? 'rgba(224,137,61,0.25)' : 'transparent'}`,
                      background: i === active ? 'var(--surface)' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => {
                      if (i !== active) {
                        e.currentTarget.style.background = 'var(--surface)'
                        e.currentTarget.style.borderColor = 'var(--border)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (i !== active) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.borderColor = 'transparent'
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                      <span aria-hidden="true" style={{ fontSize: 18 }}>{s.emoji}</span>
                      <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)' }}>{s.title}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right: scenario display */}
          <AnimatedSection delay={0.2} style={{ position: 'sticky', top: 100 }}>
            <div
              role="region"
              aria-label="Livadra response suggestions"
              style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 28, padding: '24px 20px',
                boxShadow: '0 20px 60px rgba(43,27,32,0.30)',
              }}
            >
              <div style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)' }}>
                Livadra — Texting Mode
              </div>

              {/* Situation */}
              <div style={{ background: 'var(--bg3)', borderRadius: 10, padding: '12px 14px', marginBottom: 16, borderLeft: '2px solid var(--accent)' }}>
                <div style={{ fontSize: 10, color: 'var(--accent)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>
                  Situation
                </div>
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>
                  {scenarios[active].situation}
                </p>
              </div>

              {/* Options */}
              <div aria-label="Suggested responses" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {scenarios[active].options.map((opt, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 10,
                    background: 'var(--bg3)', borderRadius: 10, padding: '11px 13px',
                    cursor: 'pointer', transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(224,137,61,0.06)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg3)')}
                  >
                    <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: '50%', background: opt.color, flexShrink: 0, marginTop: 4 }} />
                    <div>
                      <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.5 }}>{opt.text}</div>
                      <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 2 }}>{opt.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
