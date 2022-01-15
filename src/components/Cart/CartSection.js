import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './CartSection.module.css';
import Button from '../UI/Button/Button';

function CartSection(props) {
    
    const cartAmount=useSelector(state=>state.cart.totalAmount);
    const gstPerc =10;
    const gst=cartAmount*0.1;
    const totalAmount=cartAmount+gst;
    const openCheckOutModalHandler= ()=>{
        props.openCheckOut();
    }
    return (
        <div className={classes.cartSection}>
                <div className={classes.PriceSection}>
                <div className={classes.pLeft}>
                    <h4>Cart Price  </h4>
                    <p>GST %  </p>
                    <p>GST  </p>
                    <h3>Total Price  </h3>
                </div>
                <div className={classes.pRight}>
                    <h4>: {cartAmount}</h4>
                    <p>: {gstPerc} </p>
                    <p>: {gst}</p>
                    <h3>: {totalAmount} </h3>
                </div>
                </div>
                <div className={classes.cartBtn}>
                    <Button btnName="Add More"/>
                    <Button btnName="Check Out" onclick={openCheckOutModalHandler}/>
                </div>
            </div>
    )
}

export default CartSection
