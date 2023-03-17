import { NextApiRequest, NextApiResponse } from 'next';

import { STRIPE_SECRET_KEY } from '@/src/config/environments';

import { Stripe } from 'stripe';

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { items } = req.body;

        try {
            const getItems = await items.map((item: any) => {
                return {
                    price: item.price,
                    quantity: item.quantity,
                };
            });

            const params: Stripe.Checkout.SessionCreateParams = {
                mode: 'payment',
                line_items: getItems,
                success_url: `${req.headers.origin}/cart`,
                cancel_url: `${req.headers.origin}/cart`,
            };

            const checkoutSession: Stripe.Checkout.Session =
                await stripe.checkout.sessions.create(params);

            res.status(200).json({ data: checkoutSession });
        } catch (error: any) {
            res.status(error.statusCode || 500).json(error.message);
            console.log(error.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
