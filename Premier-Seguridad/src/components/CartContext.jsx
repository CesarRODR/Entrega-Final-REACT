import { createContext, useState } from "react";


export const CartContext = createContext({
    
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        setCart([...cart, {...item, quantity}]);
       
    }

    const removeItem = (id) => setCart(cart.filter(product =>product.id !== id));
    

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const getTotalQuntity = () => {
        let totalQuantity = 0
        cart.forEach(prod => { totalQuantity += prod.quantity })

        return totalQuantity
    }

    const totalQuantity = getTotalQuntity()

    const  getTotal =() =>{
        let total = 0
        cart.forEach(prod =>{total += prod.quantity * prod.precio})

        return total
    }

    const total = getTotal()

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )
}