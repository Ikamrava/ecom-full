import React from 'react'
import clientPromise from '../../lib/mongodb'
import ProductDetails from '../../components/ProductPage'

function page({product}) {
    return (
      <div>
        <ProductDetails product={product}/>
      </div>
    )
  }

export default page

export const getServerSideProps = async (context) => {
    const id = await (context.params.id)
    
  
    
    
        const client = await clientPromise;
           const db = client.db("test");
           const products = await db
               .collection("products")
               .find({})
               .toArray();

               const product = products.filter(product => product._id == id)
               
            
            
    
           
          
        return {
          props: { 
            isConnected: true,
            product: JSON.parse(JSON.stringify(product)),
            
           }
          }
    }