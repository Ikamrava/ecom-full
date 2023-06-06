import clientPromise from '../../lib/mongodb';




const stripe = require('stripe')(process.env.API_URL);
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("test");

    if(req.method !== 'POST'){
        res.status(405).json({message: 'Method not allowed'})
    }else{
        const {name, email, city,postcode,street,country ,products} = req.body
        const productsIds = products
        const uniqIds = [...new Set(productsIds)]
        const allProducts = await db.collection("products")
        .find()
        .toArray()

        const cartArray = []

        uniqIds.forEach(id => {
            const product = allProducts.find(product => product._id == id)
            cartArray.push(product)
          })
  
        let line_items = []

        for (const id of uniqIds) {
          
            const info = allProducts.find(p => p._id == id)
          
            
            const quantity = productsIds.filter(item => item === id)?.length || 0
            
            
            if(quantity>0 && info){
            line_items.push({
                quantity,
                price_data:{
                    currency: 'gbp',
                    product_data:{name: info.name},
                    unit_amount: info.price * 100,
            }
          })
         }
        }

       

        const orderCollection = db.collection("orders")

        const orderDoc =  orderCollection.insertOne({
            line_items,
            name,
            email,
            city,
            postcode,
            street,
            country,
            paid: false
    })
    

    const session = await stripe.checkout.sessions.create({
        line_items,
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${process.env.URL}/cart?success=true&order=${orderDoc._id}`,
        cancel_url: `${process.env.URL}/cart?canceled=true&order=${orderDoc._id}`,
        customer_email: email,
        client_reference_id: orderDoc._id,

        // metaData: {orderId:orderDoc._id.toString()}
    })
    res.json({
        // line_items
        url: session.url,
    })
       
 }

}











    
  

   