import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


const Cart = () => {

    const { cart, totalQuantity, total, clearCart } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>NO HAY ITEMS EN EL CARRITO!</h1>
                <Link to={"/"} className='option'> <button className='btn-volver'>Volver a todos los productos</button></Link>
            </div>
        )
    }

    return (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        
          <h3>total: ${total}</h3>
          <div className='botones-cart'>
          <button  onClick={() => clearCart()} className="limpiar-cart">
            Limpiar carrito
          </button>
          <Link to={"/checkout"} className="option">
            
            <button className='fin-compra'>Finalizar Compra</button> 
            
          </Link>
          </div>
        </div>
      );
      
}

export default Cart