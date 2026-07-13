import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Livadra — Social Intelligence, Made Natural'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2B1B20',
          backgroundImage:
            'radial-gradient(ellipse 900px 600px at 20% 15%, rgba(224,137,61,0.35), transparent 60%), radial-gradient(ellipse 700px 500px at 85% 85%, rgba(222,154,174,0.28), transparent 60%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 22,
              background: '#E0893D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
              fontWeight: 600,
              color: '#2A1710',
              fontFamily: 'serif',
            }}
          >
            L
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              color: '#FBF1E6',
              fontFamily: 'serif',
              letterSpacing: '-1px',
            }}
          >
            Livadra
          </div>
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#D8C4B2',
            fontFamily: 'sans-serif',
            fontWeight: 400,
          }}
        >
          Never run out of things to say again.
        </div>
      </div>
    ),
    { ...size }
  )
}
