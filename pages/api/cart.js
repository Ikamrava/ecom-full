

import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    const ids = await req.body.ids
    console.log(ids)
//    try {
//        const client = await clientPromise;
//        const db = client.db("test");

//        const product = await db
//            .collection("products")
//            .find({_id:ids})
//            .toArray();

//        res.json(product);
//    } catch (e) {
//        console.error(e);
//    }
};
// import { Product } from '../lib/products'


// export  default async function handler(req, res) {

    
//         await connect()
//         const ids = await req.body.ids


//         // const p = 
//         res.json(await Product.find({_id:ids}))
//         // 

//         // res.json(await Product.find({_id:ids}))
//       // Process a POST request
   
    
//   }
    

  