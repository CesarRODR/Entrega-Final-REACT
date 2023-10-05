import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getDocs,
  collection,
  query,
  where,
  getFirestore
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProduct0s] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaName } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();

    const productsRef = categoriaName
      ? query(collection(db, "productos"), where("categoria", "==", categoriaName))
      : collection(db, "productos");

    getDocs(productsRef)
      .then((snapshot) => {
        if (snapshot.size !== 0) {
          setProduct0s(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [categoriaName]);

  if (loading) {
    return <h1>cargando</h1>; 
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;




























/* function getProductos(categoriaName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoriaName !== undefined) {
        const productosFiltrados = productos.filter(
          (item) => item.categoria === categoriaName);
        
        resolve(productosFiltrados)
 
      } else {
        resolve(productos);
      }
    }, 2000)
  });
}
export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoriaName} = useParams();

  useEffect(()=>{
    getProductos(categoriaName).then((data)=> setProducts (data));

  },[categoriaName])

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
}; */


