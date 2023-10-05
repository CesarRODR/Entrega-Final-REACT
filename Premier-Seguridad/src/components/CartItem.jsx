
import { CartContext } from './CartContext';
import { useContext } from 'react'

const CartItem = ({ objeto, nombre, imagen, precio, quantity }) => {

  const { removeItem } = useContext(CartContext);

  return (
    <>
      <section className='carrito'>
        <div>
          <img className='img-cart' src={imagen} alt="imagen" />
        </div>
        <div className='cart-detalles'>
          <h3>{objeto} "{nombre}"</h3>
          <p >Precio por unidad ${precio}</p>
          <p >Cant. {quantity} </p>
          <button className='delete' onClick={() => removeItem ()} >Eliminar</button>
        </div>

      </section>

    </>
  )
}
export default CartItem