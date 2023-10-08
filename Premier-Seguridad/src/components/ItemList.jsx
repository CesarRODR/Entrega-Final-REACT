
import Item from "./Item";



export default function ItemList({products}) {

    return (
        <div className="item-list container-fluid d-flex row ">
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>

    )
}
