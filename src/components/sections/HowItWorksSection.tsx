'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Tell Witly what\'s happening',
    description:
      'Describe the situation in your own words — who\'s involved, what the vibe is, what you\'re trying to achieve. The more you share, the more specific and useful the response.',
    detail: 'Text, voice, or an ongoing thread — Witly meets you where you are.',
  },
  {
    number: '02',
    title: 'Get three calibrated options',
    description:
      'Safe, playful, or bold — each with a brief delivery note. Not scripts. Not commands. Just thoughtful options that account for your personality, your relationship, and the moment.',
    detail: 'Every suggestion is framed collaboratively. Witly never tells you what to say.',
  },
  {
    number: '03',
    title: 'You choose. You send.',
    description:
      'Pick the option that feels right, adjust the wording, or just use it as a starting point. What you actually say is always your call.',
    detail: 'Your voice, your call — always.',
  },
]

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-cream"
      aria-label="How Witly works"
    >
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-warm-500 mb-4">
            Simple by design
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-900 leading-tight">
            How it works.
          </h2>
          <p className="mt-4 text-lg text-warm-600 max-w-lg mx-auto leading-relaxed">
            Three steps. No complicated setup. No trying to figure out what the AI wants.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.12} className="relative">
              <div
                className={`flex gap-7 md:gap-10 pb-12 md:pb-14 ${
                  i < steps.length - 1 ? 'relative' : ''
                }`}
              >
                {/* Number + connector line */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="flex items-center justify-center font-mono text-sm font-bold shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: i === 0 ? '#C4956A' : '#EAE5DF',
                      color: i === 0 ? 'white' : '#8A8480',
                      boxShadow: i === 0 ? '0 4px 16px rgba(196,149,106,0.3)' : 'none',
                    }}
                  >
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="mt-3 flex-1 w-px"
                      style={{
                        background: 'linear-gradient(to bottom, #D5CCC4, transparent)',
                        minHeight: 40,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pt-1.5 pb-2 flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-warm-900 mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base text-warm-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: '#C4956A',
                      borderLeft: '2px solid rgba(196,149,106,0.4)',
                      paddingLeft: 12,
                    }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-4">
          <a href="#waitlist" className="btn-primary">
            Try it early
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
