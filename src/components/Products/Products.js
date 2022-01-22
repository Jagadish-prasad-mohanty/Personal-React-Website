import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IndivisualProduct from './IndivisualProduct/IndivisualProduct'
import Spinner from '../UI/Spinner/Spinner';
import { initiateCart } from '../../store/actions/cartAction';
import { fetchProducts, initProducts } from '../../store/actions/productAction';
function Products() {
    // const products= useSelector(state=>state.products);
    
    const dispatch=useDispatch();
    const products=useSelector(state=>state.products.products);
    const isLoading=useSelector(state=>state.products.isLoading);

    
    const productItems= products.map(item=><IndivisualProduct key={item.id} id={item.id} name={item.name} price={item.price} imgLink={item.image} hotelName={item.hotelName} forCart={false}/>)
    return (
        <div>
            {isLoading &&
            <Spinner/>}
            {!isLoading && productItems}
        </div>
    )

}

export default Products
