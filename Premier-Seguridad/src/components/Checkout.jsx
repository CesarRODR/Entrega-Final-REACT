
import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"


const Checkout = () => {

const  [nombre, setNombre] = useState("")
const  [email, setEmail] = useState("")
const  [telefono, setTelefono] = useState("")
const  {cart, total, clearCart} = useContext(CartContext);
const  [ordenId, setOrdenId] = useState();

function crearOrden () {
  const db = getFirestore();
  const orden ={
    buyer:{
      nombre, email, telefono 
    },
    items: cart, total
  }
  const ordenesRef = collection(db, "ordenes");
  addDoc(ordenesRef, orden).then((result) => setOrdenId(result.id))

  clearCart()
};
if(ordenId){
  return <h3>{`Gracias por comprar en Premier Seguridad, el numero deorden de tu pedido es: ${ordenId}`}</h3>
}

  return (
    <form onSubmit={(e) =>e.preventDefault()} className="formulario-check" >
        <label>nombre</label>
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        <label>email</label>
        <input className="" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label>telefono</label>
        <input type="text" value={telefono} onChange={(event) => setTelefono(event.target.value)} /> 
        <button className="buton-check" onClick={crearOrden} >Enviar</button> 
    </form>
  )
}

export default Checkout