
import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import Header from '../components/Header'
import Feature from '../components/Feature'
import AllProducts from '../components/AllProducts'



export const getServerSideProps = async () => {

  try {

    const featuredId =  "64d0c3ca7d894e14f3cffe3a"

    const client = await clientPromise;
       const db = client.db("test");

       const products = await db
           .collection("products")
           .find({})
           .sort({ metacritic: -1 })
           .toArray();
  
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
        <title>ShopHouse</title>
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
