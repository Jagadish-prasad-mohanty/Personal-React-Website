import React, { useState, useEffect } from 'react';
import Modal from '../UI/Modal/Modal';
import { useSelector } from 'react-redux';
import classes from './CheckOut.module.css';
import CartSection from './CartSection';
import Button from '../UI/Button/Button';
import OrderAddress from './OrderAddress';
import { defaultAddress } from '../../store/actions/cartAction';

function CheckOut(props) {
    const cart=useSelector(state=>state.cart);
    console.log("[CheckOut]-> cartData",cart.cart);

    
    const [orderAddress, setOrderAddress]=useState(false);
    const checkoutData=cart.cart.map(item=>{
        const index=props.products.findIndex(itm=>itm.id===item.id)
        console.log(index);
        if (index !==-1){
            return <div className={classes.checkOutItem} key={props.products[index].id}>
                    <h3 className={classes.checkOutItemTitle}>{props.products[index].name}</h3>
                    <p><i class="fas fa-times"></i> {item.count}</p>
                    <p>: {props.products[index].price*item.count}</p>
            </div>
        }
    });
    

    const fillOrderAddressHandler=()=>{
        if (orderAddress)
            console.log("hi there")
        setOrderAddress(true);
    }

    return (
        <Modal closeModal={props.closeModal}>
        <div className={classes.checkOutItems}>

            {checkoutData}
        </div>
            {orderAddress && <OrderAddress />}
            <Button btnName="Place Order" onclick={fillOrderAddressHandler}/>
            
        </Modal>
  
    )
}

export default CheckOut
