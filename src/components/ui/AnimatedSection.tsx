'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
}

export default function AnimatedSection({
  children,
  className,
  style,
  delay = 0,
  direction = 'up',
  distance = 24,
}: AnimatedSectionProps) {
  const initial: Record<string, number> = { opacity: 0 }

  if (direction === 'up') initial.y = distance
  if (direction === 'down') initial.y = -distance
  if (direction === 'left') initial.x = distance
  if (direction === 'right') initial.x = -distance

  const animate: Record<string, number> = { opacity: 1 }
  if (direction === 'up' || direction === 'down') animate.y = 0
  if (direction === 'left' || direction === 'right') animate.x = 0

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
