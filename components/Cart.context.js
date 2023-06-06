import { createContext, useEffect } from "react";
import { useState } from 'react';


export const CartContext = createContext({})

export default function CartContextProvider({children}) {

    const [cart, setCart] = useState([])
    const [email, setEmail] = useState("")
    const [name,setName] = useState("")
    const [street,setStreet] = useState("")
    const [city,setCity] = useState("")
    const [postcode,setPostcode] = useState("")
    const [country,setCountry] = useState("")


    function addToCart(id){
       
           setCart([...cart,id])
           localStorage.setItem('cart',JSON.stringify([...cart,id]))
      }

    function removeFromCart(id){

        setCart(prev=>{
            const position = prev.indexOf(id)

            if(position !== -1){
                console.log("if" + position)
                return prev.filter((value,index)=> index !== position)
            }else{
                console.log("else" + position)
                return prev
            }  
        })
        
        localStorage.setItem('cart',JSON.stringify(cart))

        
        
    }
    

   
    useEffect(()=>{
        const localstorageCart = localStorage.getItem('cart')
        if(localstorageCart){
            setCart(JSON.parse(localstorageCart))
        }
        
    },[])

    return (
        <CartContext.Provider value={{cart, setCart,addToCart,removeFromCart,setName,setStreet,setCity,setPostcode,setCountry,setEmail,name,street,city,postcode,country,email}}>
            {children}
        </CartContext.Provider>
    )
}