import { NextApiRequest, NextApiResponse } from 'next';

import { STRIPE_SECRET_KEY } from '@/src/config/environments';

const stripe = require('stripe')(STRIPE_SECRET_KEY);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {
            const { items } = req.body;

            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: items.map((item: any) => {
                    return {
                        price: item.price,
                        quantity: item.quantity,
                    };
                }),

                mode: 'payment',
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            });
            res.redirect(303, session.url);
        } catch (error: any) {
            res.status(error.statusCode || 500).json(error.message);
            console.log(error);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
