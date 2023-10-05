import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"

export const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)


  return (
    <Link to={"/cart"} className="CartWidget" >
      <i className="bi bi-cart3"></i>
      {totalQuantity}
    </Link>
  )
} 