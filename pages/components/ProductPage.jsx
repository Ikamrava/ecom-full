// import React, { useContext } from 'react'
// import Header from './Header'
// import ProductImages from './ProductImages'
// import 'react-quill/dist/quill.bubble.css';
// import dynamic from 'next/dynamic'
// import { BsFillBasket3Fill } from 'react-icons/bs'
// import { CartContext } from './CartContext'


// function ProductDetails({product}) {


//   const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
//     ssr: false,
//     loading: () => <p>Loading ...</p>,
//     })

//     const {cart,setCart} = useContext(CartContext)


//     function addHandler(){
//          setCart([...cart,product._id])
//          localStorage.setItem('cart',JSON.stringify([...cart,product._id]))

//     }

//   return (
//     <div className=' max-w-7xl mx-auto'>
//         <Header/>
//         <div>
//           <h3 className='mt-3 mx-2'>{product.name}</h3>
//           <div className='md:flex  mt-5 mx-2 '>
//               <div className=' '>
//                  <ProductImages images={product.images}/>
//               </div>
//               <div className=' max-w-2xl  mt-5  mx-5'>
//                 < h3 className='mt-3 mx-2'> Description</h3>
               
//                 <QuillNoSSRWrapper  theme="bubble" value={product.description} readOnly />
//                 <h6 className=' font-bold text-2xl ml-4'>£{product.price}</h6>

//                <div className='flex bg-yellow-400 w-40 items-center gap-2 ml-4 pl-4 rounded-md cursor-pointer max-w-full transition-transform hover:scale-105'>
                    
//                     <div className='  '>
//                         <BsFillBasket3Fill size={20} color='black'></BsFillBasket3Fill>
//                     </div>
//                     <button className=' font-bold  text-black  pr-2 py-1  text-lg  '
//                       onClick={addHandler}>Add to Cart</button>  
//                </div>
                
//               </div>
//           </div>
        
//         <div className=' max-w-2xl  mt-5 border-t-2 border-gray-300 mx-5'>
//           < h3 className='mt-3 mx-2'> Configuration</h3>
//           {Object.entries(product.properties).map(([key, value]) => (
//             <div className='flex  gap-2 ml-4' key={key}>
//               <p  className=' font-bold'>{key}: </p>
//               <span> {value}</span>
//             </div>
          
//         ))}
  

//         </div>
//         </div>
//     </div>
//   )
// }

// export default ProductDetails


