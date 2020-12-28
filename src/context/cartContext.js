import React, { useEffect, createContext } from "react"
import useLocalStorage from '../hooks/useLocalStorage'

export const CartContext = createContext({
  cart: [],
  addToCart: ()=>{},
  adjustCart: ()=>{},
  removeFromCart: ()=>{},
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

  const updateCart = ((id, qty)=>{
    const updatedCart = cart.filter(item=>item.id===id).length>0
          ? cart.reduce((cartArray, item)=> item.id===id 
              ? item.qty >qty 
                  ? [...cartArray, {id: item.id, qty: item.qty-qty}]
                  : cartArray
              : cartArray, []
            )
          : qty>0 ? [...cart, {id, qty}] : cart;
    setCart(updatedCart);
  })

  const removeFromCart = ((id)=>{
    const updatedCart = cart.filter(item=>item.id!==id);
    setCart(updatedCart)
  })
  const contextObject = {cart, addToCart, updateCart, removeFromCart};
  return (
    <CartContext.Provider value={contextObject}>
      {children}
    </CartContext.Provider>
  )
}
