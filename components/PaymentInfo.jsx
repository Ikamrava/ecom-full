import React, { useContext } from 'react'

import axios from 'axios'
import { CartContext } from './Cart.context'

function PaymentInfo() {
    const {name,email,city,postcode,street,country,cart,setName,setEmail,setCity,setPostcode,setStreet,setCountry} = useContext(CartContext)

    async function paymentHandler(){
      if(!name || !email || !city || !postcode || !street || !country){
        alert('Please fill all the fields')
        return
      }

    
      const res = await axios.post(`${process.env.URL}/api/checkout`,{
        products:cart,
        name,
        email,
        city,
        postcode,
        street,
        country
      })

      if(res.data.url){
        window.location = res.data.url
      }
    }


  return (
    
        <div className="flex flex-col gap-3">
            
            <input type="text" className="form-control" id="name" placeholder="Name" name='name' value={name}  
            onChange={(e)=>setName(e.target.value)} required
            />
           
            <input type="text" className="form-control" id="email" placeholder="Email" name='email' value={email}
            onChange={(e)=>setEmail(e.target.value)} required/>

            <div className=' flex gap-2'>

                
                <input type="text" className="form-control" id="city" placeholder="City" name='city' value={city}
                onChange={(e)=>setCity(e.target.value)} required
                />

               
                <input type="text" className="form-control" id="postcode" placeholder="Post Code" name='postcode'
                 value={postcode} 
                 onChange={(e)=>setPostcode(e.target.value)} required
                  />
           
            </div>
            
            <input type="text" className="form-control" id="street" placeholder="Street" name='street' value={street} 
            onChange={(e)=>setStreet(e.target.value)} required/>
           
            <input type="text" className="form-control" id="country" placeholder="Country" name='country' value={country}  
            onChange={(e)=>setCountry(e.target.value)} required/>

            <input type="hidden" name='products' value={cart.join(',')} />

            <button className='  bg-yellow-300 mt-3 p-2 font-bold' onClick={paymentHandler}>Contine to Payment</button>
           

        </div>

   
  )
}

export default PaymentInfo