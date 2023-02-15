const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformItems = items.map((item) => ({
    price_data: {
      currency: 'IDR',
      unit_amount: item.price * 15000 * 100,
      product_data: {
        name: item.title,
        images: [item.image],
        description: item.description,
      },
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_options: [{ shipping_rate: 'shr_1MbOjSFd02nHe5M8sZnB7x2e' }],
    shipping_address_collection: {
      allowed_countries: ['ID'],
    },
    line_items: transformItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id:items });
};
