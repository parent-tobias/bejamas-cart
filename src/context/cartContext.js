import React, { useEffect, createContext } from "react"
import useLocalStorage from '../hooks/useLocalStorage'

export const CartContext = createContext({
  cart: [],
  setCart: ()=>{}
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = ((id)=>{
    const updatedCart = cart.filter(item=>item.id===id).length>0 
          ? cart.reduce((cartArray, item)=>{
            return [...cartArray, {id: item.id, qty: item.id===id ? item.qty+1 : item.qty}]
          }, [])
          : [...cart, {id, qty: 1}]
    setCart(updatedCart)

  })
  const contextObject = {cart, addToCart};
  return (
    <CartContext.Provider value={contextObject}>
      {children}
    </CartContext.Provider>
  )
}
