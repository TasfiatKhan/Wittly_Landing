// Requires LOOPS_API_KEY in .env.local
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const email: string = typeof body.email === 'string' ? body.email.trim() : ''

  if (!email || !email.includes('@')) {
    return NextResponse.json({ success: false, error: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.LOOPS_API_KEY
  if (!apiKey) {
    return NextResponse.json({ success: false, error: 'Service unavailable' }, { status: 500 })
  }

  try {
    const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source: 'landing-page-waitlist' }),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return NextResponse.json(
        { success: false, error: data.message ?? 'Failed to join waitlist' },
        { status: 400 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: 'Service unavailable' }, { status: 500 })
  }
}
