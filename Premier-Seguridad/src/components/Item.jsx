import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (

        <div className=" card-item ">
            <Link to={`/detail/${product.id}`} >
                <img className='card-img-top' src={product.imagen} width={150} />
            </Link>
            <div className='card-body text-white  mb-3'>
                <h2 className='card-tittle'>{product.nombre}</h2>
                <span className='card-text'>💲{product.precio}</span>
            </div>
        </div>
    )
}


export default Item