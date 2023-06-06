import { useContext } from "react"
import clientPromise from "../lib/mongodb"

import Cart from "../components/Cart"






   

function cart({products}) {
  

  return (
   
    <Cart cartData={products} />
  )
}

export default cart

export const getServerSideProps = async (context) => {
const ids = await (context.query.ids)
const arrayIds = ids.split(',')



    const client = await clientPromise;
       const db = client.db("test");
       const products = await db
           .collection("products")
           .find({})
           .toArray();
        const cartArray = []

          arrayIds.forEach(id => {
            const product = products.find(product => product._id == id)
            cartArray.push(product)
          })
      
    return {
      props: { 
        isConnected: true,
        products: JSON.parse(JSON.stringify(cartArray)),
        
       }
      }
}