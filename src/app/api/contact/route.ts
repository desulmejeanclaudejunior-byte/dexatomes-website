import { NextResponse } from 'next/server'

const CONTACT_FUNCTION_URL =
  'https://us-central1-dexus-lab.cloudfunctions.net/contactForm'

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const res = await fetch(CONTACT_FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, service, message }),
    })

    if (!res.ok) {
      console.error('contactForm function error:', await res.text())
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
