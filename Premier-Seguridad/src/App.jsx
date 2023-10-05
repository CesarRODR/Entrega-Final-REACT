
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {NavBar}  from './components/NavBar'
import ItemListContainer  from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { CartProvider } from "./components/CartContext"
import Checkout from "./components/Checkout"
import Cart from "./components/Cart"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
     <Route exact path="/" element={<ItemListContainer greeting="Todos los productos" /> }/>
     <Route exact path="/categoria/:categoriaName" element={<ItemListContainer/>}/>
     <Route exact path="/detail/:id" element={<ItemDetailContainer/> }/> 
     <Route exact path="/cart" element={<Cart/>}/>
     <Route exact path="/checkout" element={<Checkout />}></Route>
    </Routes>
    </CartProvider>
    </BrowserRouter>
      
  )
}

export default App