import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"


export default function ItemDetail({ imagen, nombre, descripcion, stock, precio, categoria }) {

    const [quanrityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnadd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            nombre, precio, imagen
        }
        addItem(item, quantity)
    }

    return (
        <div className="detail">
            <div className="card">
                <img src={imagen} alt="imagen" className="img" />
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <p>{stock}</p>
                <span>💲{precio}</span>
                <h4>{categoria}</h4>
            </div>
            <div className="count">
                {
                    quanrityAdded > 0 ? (
                        <Link to={"/cart"}>
                        <button className="finalizar-compra-button">Terminar compra</button>
                        </Link>
                    ) : (
                        <div className="itemcount">
                            <ItemCount initial={1} stock={stock} onAdd={handleOnadd} />
                        </div>
                    )
                }
            </div>
        </div>


    )
}


