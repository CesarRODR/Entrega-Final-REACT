

 import { useState } from "react";




 export default function ItemCount  ({stock, initial, onAdd}){
    const[cantidad, setCantidad] = useState(initial)

    const incremento =()=>{
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const decremento = () =>{
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    
    }
    return(
        <div className="item-count">
            <button className="btn-dec" onClick={decremento}>➖</button>
            <h3>{cantidad}</h3>
            <button className="btn-incr" onClick={incremento}>➕</button>
            <div>
            <button className="adcarro" onClick={() => onAdd(cantidad)} disabled ={!stock}>Agregar al carrito</button>
            </div>
        </div>
   
    )
} 
