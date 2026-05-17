'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

export default function MissionSection() {
  return (
    <section style={{ padding: '100px 0' }} aria-labelledby="mission-heading">
      <div className="container-witly">
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <AnimatedSection>
            <span className="section-eyebrow">Our Mission</span>
            <h2 className="section-title" id="mission-heading">
              Built for the moments that matter most.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="section-lead" style={{ maxWidth: '100%', marginBottom: 24 }}>
              Social confidence isn&apos;t something you either have or you don&apos;t.
              It&apos;s a skill — and like any skill, it gets easier with the right support.
              Witly exists because too many people move through the world feeling slightly
              less comfortable than they&apos;d like to be. That quiet uncertainty before
              you hit send. The moment at the party where you can&apos;t find the words.
              The work conversation you replay for hours.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p className="section-lead" style={{ maxWidth: '100%' }}>
              We&apos;re not here to script your life or replace your personality.
              We&apos;re here to make the space between who you are and how you come
              across a little smaller. More natural. More you.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
