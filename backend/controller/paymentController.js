const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const paymentController = async (req, res) => {

    const { item } = req.body;
    console.log(item);
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
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
    });
    res.json({ url: session.url });

}

module.exports = paymentController