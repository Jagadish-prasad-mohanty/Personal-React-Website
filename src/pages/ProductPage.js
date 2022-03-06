import React, { useEffect } from 'react'
import Products from '../components/Products/Products'

function ProductPage() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[])
    return (
        <div>
            <Products/>
        </div>
    )
}

export default ProductPage
