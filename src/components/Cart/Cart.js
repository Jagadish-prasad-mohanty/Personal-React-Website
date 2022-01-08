import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IndivisualProduct from '../Products/IndivisualProduct/IndivisualProduct';
import Modal from '../UI/Modal/Modal';

import Spinner from '../UI/Spinner/Spinner';
import classes from './Cart.module.css';
import CartSection from './CartSection';
function Cart() {
    //* use redux state(part of state mkeans cart) *
    const cartProducts=useSelector(state=>state.cart.cart);
    
    //use State for check out modal
    const [checkOurModal,setCheckOutModal]=useState(false);
    //**Fetch data from api (product data) */
    const [products,setProducts]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    
    useEffect(()=>{
        const fetchMeals= async ()=>{
            const response=await fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Products.json");
            if (!response.ok){
                throw new Error("Something went wrong!!");
            }
            const data=await response.json();
            setIsLoading(false);
            return data;
        }
        setIsLoading(true)
        fetchMeals().then(data=>{
            
            console.log("[Cart.js -> fetch product data]",data);
            
            const productItems=[];
            for (let key in data){
                const productItem={
                    id:data[key].id,
                    hotelName:data[key].hotelName,
                    price:data[key].price,
                    image:data[key].image,
                    name:data[key].name
                }
                productItems.push(productItem);
            }
            console.log("[cart.js ->productItems]",productItems);
            setProducts(productItems);
        })
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
        {cartProductItems.length!==0 && <CartSection openCheckOut={openCheckOutHandler}/>}
    </div>
    
    return (
        <div className={classes.Cart}>
        {checkOurModal && <Modal closeModal={closeCheckOutModalHandler}>
            <h2>Hi There</h2>
        </Modal>}
            {CartPageContent}
            
        </div>
    )
}

export default Cart
