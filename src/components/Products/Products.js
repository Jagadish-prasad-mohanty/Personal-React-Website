import React from 'react'
import { useSelector } from 'react-redux'
import IndivisualProduct from './IndivisualProduct.js/IndivisualProduct'

function Products() {
    const products= useSelector(state=>state.products);
    const productItems= products.products.map(item=><IndivisualProduct key={item.id} id={item.id} name={item.name} price={item.price} imgLink={item.image} hotelName={item.hotelName} forCart={false}/>)
    return (
        <div>
            {productItems}
        </div>
    )
}

export default Products
