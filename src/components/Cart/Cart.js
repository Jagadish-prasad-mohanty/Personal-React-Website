import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IndivisualProduct from '../Products/IndivisualProduct/IndivisualProduct';
import Modal from '../UI/Modal/Modal';
import {initiateCart,fetchCart} from '../../store/actions/cartAction'
import CheckOut from './AddressConfirm';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Cart.module.css';
import CartSection from './CartSection';
import { fetchProducts } from '../../store/actions/productAction';
import AddressConfirm from './AddressConfirm';
import Button from '../UI/Button/Button';

function Cart() {
    //* use redux state(part of state mkeans cart) *
    const cartProducts=useSelector(state=>state.cart.cart);
    
    //use State for check out modal
    const [checkOurModal,setCheckOutModal]=useState(false);
    //**Fetch data from api (product data) */
    
    const dispatch= useDispatch();
    const currentUser= localStorage.getItem('user');
    const products=useSelector(state=>state.products.products);
    const isLoading=useSelector(state=>state.products.isLoading);
    
      
    useEffect(() => {
        
        dispatch(fetchProducts())
    }, [])
    

    const openCheckOutHandler= () =>{
        setCheckOutModal(true);
        console.log("[checkout Modal opened]")
    }
    const closeCheckOutModalHandler =()=>{
        setCheckOutModal(false);
    }

    //** setting the cart product data* */
    // const cartProducts=products.products.filter(item=>item.isFev);
    console.log("[Cart.js -> cartProducts]",cartProducts);
    console.log("[Cart.js] -> products",products);
    const cartProductItems=cartProducts.map(item=>{
        const index=products.findIndex(itm=>itm.id===item.id);
        console.log("[Cart.js] -> index",index);
        if (index !==-1){
            const prod=products.find(itm=>itm.id===item.id)
            return <IndivisualProduct key={prod.id} id={prod.id} name={prod.name} price={prod.price} imgLink={prod.image} hotelName={prod.hotelName} forCart={true} count={item.count}/>}
        }
    );
      
    
    const CartPageContent=isLoading?<Spinner/>:<div>

        {!cartProductItems.length && <h2>Start adding into to Cart</h2>}
        {cartProductItems}
        {cartProductItems.length!==0 && <div className={classes.CartSection}>
            <CartSection openCheckOut={openCheckOutHandler} />
        </div>}
    </div>
    
    return (
        <div className={classes.Cart}>
        {checkOurModal && <AddressConfirm closeModal={closeCheckOutModalHandler}  cartLen={cartProductItems.length}/>
        }
            {CartPageContent}
            
            
        </div>
    )
}

export default Cart
