
import { CartContext } from './CartContext';
import { useContext } from 'react'

const CartItem = ({ objeto, nombre, imagen, precio, quantity }) => {
  console.log("aa", CartItem)
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <section className='carrito'>
        <div className='detalles-cart'>
          <img className='img-cart' src={imagen} alt="imagen" />
        </div>

        <div>
          <h3>{objeto} "{nombre}"</h3>
          <p >Precio por unidad ${precio}</p>
          <p >Cant. {quantity} </p>
          <button onClick={() => removeItem ()} >Eliminar</button>
        </div>
      </section>

    </>
  )
}
export default CartItem