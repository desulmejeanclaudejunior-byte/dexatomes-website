import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json()

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_REPLACE_ME') {
      console.log('Contact form submission (Resend not configured):', { name, email, service, message })
      return NextResponse.json({ ok: true })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Dex Atomes <onboarding@resend.dev>',
      to: 'support@dexuslab.com',
      subject: `New inquiry from ${name} — ${service}`,
      text: `From: ${name} (${email})\nService: ${service}\n\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
