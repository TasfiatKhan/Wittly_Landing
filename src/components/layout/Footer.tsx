'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = ['Texting Mode', 'Live Mode', 'Moments', 'Early Access']
  const companyLinks = ['About', 'Blog', 'Careers', 'Press']
  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Contact']

  return (
    <footer role="contentinfo" style={{ padding: '60px 0 40px', borderTop: '1px solid var(--border)' }}>
      <div className="container-livadra">
        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 48,
          marginBottom: 48,
        }}>
          {/* Brand col */}
          <div style={{ gridColumn: 'span 2' }} className="md:col-auto">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 32, height: 32, background: 'var(--accent)', borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 16, color: '#1A1510',
              }} aria-hidden="true">L</div>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 500, color: 'var(--text)' }}>Livadra</span>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text3)', lineHeight: 1.7, maxWidth: 240 }}>
              Social intelligence for the real world. Built for humans who want to feel more comfortable and natural in every conversation.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 16 }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {productLinks.map((label, i) => (
                <li key={label}>
                  <a href={i === 3 ? '#waitlist' : '#modes'} style={{ fontSize: 14, color: 'var(--text2)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 16 }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {companyLinks.map((label) => (
                <li key={label}>
                  <a href="#" style={{ fontSize: 14, color: 'var(--text2)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text3)', marginBottom: 16 }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {legalLinks.map((label) => (
                <li key={label}>
                  <a href="#" style={{ fontSize: 14, color: 'var(--text2)', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 10,
          paddingTop: 24, borderTop: '1px solid var(--border)',
        }}>
          <p style={{ fontSize: 13, color: 'var(--text3)' }}>© {currentYear} Livadra. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'var(--text3)', fontStyle: 'italic' }}>Made for humans who like other humans.</p>
        </div>
      </div>
    </footer>
  )
}
