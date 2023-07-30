const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const paymentController = async (req, res) => {

    const { item } = req.body;
    req.body.transactionId = String(btoa(item))
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: item.map((items) => {
            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: items.name
                    },
                    unit_amount: items.price * 100
                },
                quantity: items.quantity
            }
        }),
        mode: "payment",
        success_url: `http://localhost:5173/success?det=${btoa(JSON.stringify(req.body))}`,
        cancel_url: `http://localhost:5173/cancel?Id=${btoa(item)}`,
    });
    res.json({ url: session.url });

}

module.exports = paymentController