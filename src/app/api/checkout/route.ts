import { NextResponse } from 'next/server'
import Stripe from 'stripe'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2026-06-24.dahlia',
  })
}

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_live_REPLACE_ME') {
    return NextResponse.json({ error: 'Stripe is not configured yet' }, { status: 503 })
  }

  try {
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: 1299,
            product_data: {
              name: 'Robotique Moderne — PDF',
              description: '129-page French robotics guide · Instant download',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dexatomes.com'}/store/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://dexatomes.com'}/store`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
