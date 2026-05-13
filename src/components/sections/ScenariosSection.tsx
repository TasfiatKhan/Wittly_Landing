'use client'

import { motion } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'

const scenarios = [
  {
    emoji: '💬',
    title: 'The Confusing Text',
    description:
      'They left you on read for two days, then sent "hey" with no context. Now what?',
  },
  {
    emoji: '🏢',
    title: 'The Passive-Aggressive Coworker',
    description:
      'They\'re undermining you in meetings and you need to address it without causing drama.',
  },
  {
    emoji: '🎉',
    title: 'Party, No One You Know',
    description:
      'You just arrived and the only person you knew vanished. It\'s been 20 minutes.',
  },
  {
    emoji: '❤️',
    title: 'The Situationship Limbo',
    description:
      'Things are good but undefined. You want clarity without scaring them off.',
  },
  {
    emoji: '😶',
    title: 'The Conversation That Died',
    description:
      'The chat went quiet and you need a way back in that doesn\'t feel forced.',
  },
  {
    emoji: '🤝',
    title: 'The Networking Moment',
    description:
      'They asked "so what do you do?" and your usual answer suddenly feels all wrong.',
  },
  {
    emoji: '👥',
    title: 'Friend Group Tension',
    description:
      'Something shifted between you and a close friend and neither of you is naming it.',
  },
  {
    emoji: '📱',
    title: 'The Follow-Up You Keep Avoiding',
    description:
      'You haven\'t replied in three days. The longer you wait, the harder it gets.',
  },
  {
    emoji: '🙃',
    title: 'Accidentally Weird',
    description:
      'Your last message landed wrong. Now you need to recover without making it worse.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: 'easeOut' },
  }),
}

export default function ScenariosSection() {
  return (
    <section
      className="section-padding"
      style={{ background: '#F5F2EE' }}
      aria-label="Use case scenarios"
    >
      <div className="section-container">
        <AnimatedSection className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-warm-500 mb-4">
            Sound familiar?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-warm-900 leading-tight">
            Situations Witly
            <br />
            was made for.
          </h2>
          <p className="mt-4 text-lg text-warm-600 max-w-xl mx-auto leading-relaxed">
            Not just dating. The full, complicated, sometimes-awkward spectrum of
            human social life.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="group rounded-2xl p-5 cursor-default transition-shadow duration-200 hover:shadow-warm"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(213,204,196,0.6)',
              }}
            >
              <div
                className="text-xl mb-3 flex items-center justify-center"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: '#F5F2EE',
                }}
                aria-hidden
              >
                {s.emoji}
              </div>
              <h3 className="font-semibold text-warm-900 text-sm mb-1.5">{s.title}</h3>
              <p className="text-sm text-warm-500 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
