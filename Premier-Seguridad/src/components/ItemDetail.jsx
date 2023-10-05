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
                        <Link to={"/cart"}>Terminar compra</Link>
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

/*  export default function ItemDetail({nombre,imagen,categoria,stock,precio }) {
    return (
        <div className="item-detail">
             
            <h2>{nombre}</h2>
            <img src={imagen} width={125} alt="Imagen"/>
            <p>{categoria}</p>
            <p>stock{stock}</p>
            <span>$ {precio}</span>
            
            <ItemCount />
        </div>
    
    );
}  */