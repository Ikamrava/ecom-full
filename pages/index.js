
import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Header from '../components/Header'
import Feature from '../components/Feature'
import AllProducts from '../components/AllProducts'



export const getServerSideProps = async () => {


  try {

    // const res = await fetch(process.env.API_URL + '/api/products');
    
    
   
    const featuredId =  "6474cd6e46b89b5d43bc7318"
    const client = await clientPromise;
       const db = client.db("test");

       const products = await db
           .collection("products")
           .find({})
           .sort({ metacritic: -1 })
           .toArray();
   

    // Recommendation: handle errors


    
   
    
    

    return {
      props: { 
        isConnected: true,
        products: JSON.parse(JSON.stringify(products)),
        product: JSON.parse(JSON.stringify(products.find(product => product._id == featuredId)))

       },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}





export default  function Home({products,product}) {
 
  
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/> 
        <Feature data={product}/>
        <AllProducts data={products}/>
      </main>

     

      
    </div>
  )
}
