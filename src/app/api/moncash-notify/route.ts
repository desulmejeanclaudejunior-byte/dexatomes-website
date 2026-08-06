import { NextResponse } from 'next/server'

const CONTACT_FUNCTION_URL =
  'https://us-central1-dexus-lab.cloudfunctions.net/contactForm'

export async function POST(request: Request) {
  try {
    const { name, email, plan, transactionRef } = await request.json()

    if (!name || !email || !transactionRef) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const planLabel = plan === 'annual' ? 'Annual — $29.99' : 'Monthly — $4.99'

    await fetch(CONTACT_FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `MonCash Payment — ${name}`,
        email,
        service: 'MonCash Subscription',
        message:
          `New MonCash payment received for DexusLab.\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Plan: ${planLabel}\n` +
          `MonCash Transaction Ref: ${transactionRef}\n\n` +
          `ACTION: Verify payment in MonCash app, then generate a code in the DexusLab admin screen and send it to ${email}.`,
      }),
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}
