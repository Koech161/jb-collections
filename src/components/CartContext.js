import React, { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() =>{
        const saveCart = localStorage.getItem('cart')
        return saveCart ? JSON.parse(saveCart) : []
    })
    const addToCart = (product, size) => {
        setCart(prevCart => {
            const updatedCart = [...prevCart, {...product, selectedSize: size}]
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })
    }
    const getItemCount = () => cart.length

    return (
        <CartContext.Provider value={{cart,addToCart,getItemCount}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart  =() => useContext(CartContext)
