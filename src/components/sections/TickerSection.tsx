const tickerItems = [
  { handle: '@mara.w', quote: 'felt like me again in group chats' },
  { handle: '@theo_r', quote: 'actually used it at a work happy hour' },
  { handle: '@priyak', quote: 'way less overthinking before I hit send' },
  { handle: '@danielj', quote: "the suggestions never sound like an AI wrote them" },
  { handle: '@sof.m', quote: 'helped me get through an awkward dinner' },
  { handle: '@lukasz', quote: "I'm using it for networking events now" },
]

export default function TickerSection() {
  // Duplicate for seamless loop
  const items = [...tickerItems, ...tickerItems]

  return (
    <div aria-hidden="true" style={{ padding: '40px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div className="flex w-max animate-[ticker_28s_linear_infinite]" style={{ gap: 48 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text3)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            <span style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: 1 }}>★★★★★</span>
            <span style={{ fontWeight: 500, color: 'var(--text2)' }}>{item.handle}</span>
            <span>— &ldquo;{item.quote}&rdquo;</span>
          </div>
        ))}
      </div>
    </div>
  )
}
