'use client'

import { PLAY_STORE_URL } from '@/config/links'

interface GooglePlayButtonProps {
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  className?: string
}

const sizes = {
  sm: { padding: '9px 20px', fontSize: 13, iconSize: 13, gap: 8 },
  md: { padding: '13px 26px', fontSize: 15, iconSize: 15, gap: 9 },
  lg: { padding: '16px 32px', fontSize: 16, iconSize: 17, gap: 10 },
}

function PlayGlyph({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 1.8v12.4c0 .5.55.8 1 .55l10.2-6.2c.4-.25.4-.85 0-1.1L4.5 1.25c-.45-.25-1 .05-1 .55z" fill={color} />
    </svg>
  )
}

export default function GooglePlayButton({
  variant = 'solid',
  size = 'md',
  label = 'Get it on Google Play',
  className,
}: GooglePlayButtonProps) {
  const s = sizes[size]
  const isSolid = variant === 'solid'

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} — opens Google Play in a new tab`}
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
        background: isSolid ? 'var(--accent)' : 'transparent',
        color: isSolid ? '#2A1710' : 'var(--accent)',
        border: isSolid ? 'none' : '1px solid var(--border)',
        fontSize: s.fontSize, fontWeight: 500, padding: s.padding, borderRadius: 100,
        boxShadow: isSolid ? '0 4px 24px rgba(224,137,61,0.25)' : 'none',
        transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s, border-color 0.2s, color 0.2s',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-2px)'
        if (isSolid) {
          el.style.background = 'var(--accent2)'
          el.style.boxShadow = '0 8px 32px rgba(224,137,61,0.35)'
        } else {
          el.style.borderColor = 'rgba(224,137,61,0.4)'
          el.style.color = 'var(--accent2)'
        }
      }}
      onMouseLeave={e => {
        const el = e.currentTarget
        el.style.transform = 'translateY(0)'
        if (isSolid) {
          el.style.background = 'var(--accent)'
          el.style.boxShadow = '0 4px 24px rgba(224,137,61,0.25)'
        } else {
          el.style.borderColor = 'var(--border)'
          el.style.color = 'var(--accent)'
        }
      }}
    >
      <PlayGlyph size={s.iconSize} color={isSolid ? '#2A1710' : 'var(--accent)'} />
      <span>{label}</span>
    </a>
  )
}
