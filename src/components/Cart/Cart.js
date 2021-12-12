import React from 'react'
import { useSelector } from 'react-redux'
import IndivisualProduct from '../Products/IndivisualProduct.js/IndivisualProduct';
function Cart() {
    const products=useSelector(state=>state.products);
    const cartProducts=products.products.filter(item=>item.isFev);
    const cartProductItems= cartProducts.map(item=><IndivisualProduct key={item.id} id={item.id} name={item.name} price={item.price} imgLink={item.image} hotelName={item.hotelName} forCart={true}/>)
    return (
        <div>
            {!cartProductItems.length && <h2>Start adding into to Cart</h2>}
            {cartProductItems}
        </div>
    )
}

export default Cart
