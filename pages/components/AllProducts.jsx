
import Link from 'next/link';
import React, { useContext } from 'react'
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { CartContext } from './CartContext';

function NewProducts({data}) {

  const {addToCart} = useContext(CartContext)


  
  
  return (
    <div className=' pb-6 px-2 flex mx-auto  mt-3 rounded-2xl items-center justify-center  '>

<Container>
      <Row >
        {data.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
              
              <div className='flex flex-col items-center justify-evenly  rounded-2xl shadow-lg md:h-96 mb-4 md:mb-0 w-full gap-4 '>
              <Link href={`/product/${item._id}`} >
              <div className='   flex items-center justify-center cursor-pointer pt-6    '>
                <img className=' max-w-xs md:max-w-48 md:max-h-48 object-contain rounded-2xl shadow-lg p-4 ' src={item.images[0]} alt="" />
              </div>
              </Link>
                
              <h5 className='text-center text-2lg truncate w-full px-4 font-bold '>{item.name}</h5>
              

              <div className='flex items-center justify-center gap-4 mb-4 md:mb-0    '>
                <label className='text-center  text-2xl font-bold'>{"£"+item.price}</label>
                <Button className='bg-[#f2f2f2] text-[#000] rounded-2xl shadow-lg p-2' onClick={()=>addToCart(item._id)}>Add to Cart</Button>
              </div>

              </div>
              
              </Col>
              ))}
           
          
       
      </Row>
    </Container>

    </div>
  )
}

export default NewProducts