import React, { useContext, useState } from 'react'
import { BsFillBasket3Fill } from 'react-icons/bs';

import 'react-quill/dist/quill.bubble.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CartContext } from "./Cart.context";




function Feature({data}) {
 
const {cart,setCart} = useContext(CartContext)
const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
  ssr: false,
  loading: () => <p>Loading ...</p>,
  })


    function addHandler(){
         setCart([...cart,data._id])
         localStorage.setItem('cart',JSON.stringify([...cart,data._id]))

    }



  return (
    <div className='  bg-slate-900 py-5 px-8 text-white flex flex-col justify-between mx-2 md:flex-row mt-4 md:mt-0 items-center my-0 ' >
           <div>
            <h1 className=' text-2xl font-bold'>{data?.name}</h1>
            <div className=' max-w-md'>
            <QuillNoSSRWrapper  theme="bubble" value={data?.description} readOnly />
            </div>
            
            <div className=' flex gap-4 mt-3'>
              <Link href={`/product/${data?._id}`}>
              <button 
            className=' bg-slate-900 text-white px-2 shadow-sm shadow-white inline-block text-lg transition-transform hover:scale-105 border-2 border-white' >
              Read More</button>
              </Link>
            
            <div className=' flex relative'>
            <button className=' font-bold bg-yellow-400 text-black pl-8 pr-2 py-1 shadow-sm shadow-white text-lg transition-transform hover:scale-105'
             onClick={addHandler}>Add to Cart</button>
            <div className=' absolute top-2 left-2'>
                <BsFillBasket3Fill size={18} color='black'></BsFillBasket3Fill>
            </div>
            
            </div>
            
            </div>
        </div>
        <div className=' shadow-lg mt-4 md:mt-0'>
        <img src={data?.images[0]} alt="Main Image" width={350} height={150}  className=' rounded-lg' />
        
        </div>  
        
         
      </div>
    )
  
}

export default Feature