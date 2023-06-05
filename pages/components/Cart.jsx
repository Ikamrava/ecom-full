"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import axios from 'axios'
import { AiFillPlusCircle } from 'react-icons/ai';
import { IoIosRemoveCircle } from 'react-icons/io';
import { CartContext } from './Cart.context';
import Header from "./Header"
import PaymentInfo from "./PaymentInfo"
import { get } from 'http';
import clientPromise from '../../lib/mongodb';





function Cart() {



    const {cart,setCart,addToCart,removeFromCart} = useContext(CartContext)
  

    const [products,setProducts] = useState([])
  
      
      // useEffect(() => {
      //   if(cart.length > 0){
          
      //     axios.post(`api/cart`, {ids:cart})
      //    .then(res => {
          
      //      setProducts(res.data)
      //    })
   
      //   }else{
      //     setProducts([])
        
      //   }
        
        
      //  },[cart])


    function removeHandler(id){
      const newProducts = products.filter((item)=> item._id !== id)
      setProducts(newProducts)
      setCart(newProducts.map(item=>item._id))
      localStorage.setItem('cart',JSON.stringify(newProducts.map(item=>item._id)))
    }
   
   let total = 0
   if(products.length > 0){
    total = products.reduce((acc,item)=> acc + (item.price * cart.filter(id => id === item._id).length),0)
   }

  return (
    <div className='max-w-7xl mx-auto'>
        <Header/>


        {products.length > 0 ? (
        <Container className='mt-10 '>
          <h3>Cart</h3>
          <Row>
            <Col className=' md:w-[70%] text-center'>
            <Row className=' p-2 bg-slate-300 d-md-flex d-none ' >
              <Col >
                <h6 className='font-bold'>Products</h6>
              </Col>
              <Col><h6 className='font-bold'>Quantity</h6></Col>
              <Col><h6 className='font-bold'>Price</h6></Col>
            </Row>
            
            {products.map((item)=>(
              <Row key={item._id} className='   items-center mt-4 border-b-2 border-slate-300 pb-4  '>
                  <Col className='text-center flex items-center justify-center '>
                    <img className='text-center max-w-xs md:max-w-28 md:max-h-28 object-contain rounded-2xl shadow-lg p-2 ' src={item.images[0]} alt="" />
                    </Col>
                  <Col className=' '>
                      <div className='flex  justify-center  gap-4 md:mt-0 mt-3   '>
                              <IoIosRemoveCircle size={25} className='cursor-pointer' onClick={()=>removeFromCart(item._id)}>Remove from cart</IoIosRemoveCircle>
                                <h5>{cart.filter(id => id === item._id).length}</h5>
                              <AiFillPlusCircle size={25} className='cursor-pointer' onClick={()=>addToCart(item._id)}>Add to cart</AiFillPlusCircle>
                      </div>
                  </Col>
                  <Col className=' text-center flex items-center justify-center gap-3 md:mt-0 mt-3 text-xl '>
                    <label className='text-center  text-l font-bold'>{"£"+ (item.price * cart.filter(id => id === item._id).length)}</label>
                   
                 </Col>
                 <Button className='bg-[#f2f2f2] text-[#000] rounded-2xl shadow-lg p-2 mt-4 ' onClick={(id)=>removeHandler(item._id)}>Remove</Button>
              </Row>
              ))}
              <div className='flex items-center justify-end mt-4 gap-4 '>
              <h5>Total:</h5>
              <h5>£{total}</h5>


              </div>
              

            </Col>
            <Col >
               <PaymentInfo products={products} total={total}></PaymentInfo>
            </Col>

          </Row>
        </Container>
        ):
        
        <div className='max-w-7xl mx-auto mt-6 shadow-lg p-4 rounded-2xl'>
          <h4>Cart is empty</h4>
          </div>
        
        }




         

    </div>
                

  )
}

export default Cart


