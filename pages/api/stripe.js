const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body.cartItems)

    // res.status(200).json({
    //   publishablekey:process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    // });
    try {
        
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options:[
            {shipping_rate:'shr_1LNcEpGH65siANfVlO3yPbVe'},
            {shipping_rate:'shr_1LNcFqGH65siANfVXD3pwKXz'},
        ],
        line_items: req.body.cartItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      }
      const session = await stripe.checkout.sessions.create(params);
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  }
  // else {
  //   res.status(405).end('Method not allowed');
  // }
    
  else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}