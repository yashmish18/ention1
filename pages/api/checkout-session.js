export default function handler(req, res) {

    const { cart } = JSON.parse(req.body)
    const lineItems = []
    for (const key in cart) {
        lineItems.push({
            price_data: {
                currency: 'inr',
                product_data: {
                    name: cart[key].name,
                    images: cart[key].images,
                },
                unit_amount: cart[key].price * 100,
            },
            quantity: cart[key].quantity
        })
    }

    

}
