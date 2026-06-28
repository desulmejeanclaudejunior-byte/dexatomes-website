import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, type } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const isBooking = type === 'booking'
    const subject = isBooking
      ? `[Dex Atomes] Nouvelle réservation de ${name}`
      : `[Dex Atomes] Message de ${name}`

    let htmlBody = `
      <h2>${isBooking ? 'Nouvelle Réservation' : 'Nouveau Message'}</h2>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `

    if (isBooking) {
      htmlBody += `
        <p><strong>Service:</strong> ${body.service || 'Non spécifié'}</p>
        <p><strong>Description:</strong> ${body.description || 'N/A'}</p>
        <p><strong>Budget:</strong> ${body.budget || 'Non spécifié'}</p>
        <p><strong>Date souhaitée:</strong> ${body.date || 'Non spécifiée'}</p>
      `
    } else {
      htmlBody += `<p><strong>Message:</strong> ${body.message || 'N/A'}</p>`
    }

    await resend.emails.send({
      from: 'Dex Atomes <onboarding@resend.dev>',
      to: ['support@dexuslab.com'],
      subject,
      html: htmlBody,
    })

    await resend.emails.send({
      from: 'Dex Atomes <onboarding@resend.dev>',
      to: [email],
      subject: 'Confirmation — Dex Atomes LLC',
      html: `
        <h2>Merci ${name} !</h2>
        <p>Nous avons bien reçu votre ${isBooking ? 'demande de réservation' : 'message'}.</p>
        <p>Notre équipe vous répondra sous 1-2 jours ouvrés.</p>
        <br>
        <p>— Dex Atomes LLC</p>
        <p><a href="https://dexatomes.com">dexatomes.com</a></p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
