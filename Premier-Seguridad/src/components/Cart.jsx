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
                <Link to={"/"} className='option'> Volver a todos los productos</Link>
            </div>
        )
    }

    return (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        
          <h3>total: ${total}</h3>
          <button onClick={() => clearCart()} className="button">
            Limpiar carrito
          </button>
          <Link to={"/checkout"} className="option">
            <div className='btn-finalizar'>
            <button>Finalizar Compra</button> 
            </div>
          </Link>
        </div>
      );
      
}

export default Cart