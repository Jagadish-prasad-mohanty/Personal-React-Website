import React,{useEffect} from 'react'
import Cart from '../components/Cart/Cart'
function CartPage() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
    },[])
    return (
        <div>

        <Cart/>
        </div>

        
    )
}

export default CartPage
