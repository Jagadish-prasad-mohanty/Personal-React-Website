import React from 'react';
import Modal from '../UI/Modal/Modal';
import { useSelector } from 'react-redux';

function CheckOut(props) {
    const cart=useSelector(state=>state.cart);
    console.log("[CheckOut]-> cartData",cart.cart);
    const checkoutData=cart.cart.map(item=>{
        const index=props.products.findIndex(itm=>itm.id===item.id)
        console.log(index);
            return <h3>{props.products[index].name}</h3>
        
    });
    console.log("CheckoutData",checkoutData);
    return (
        <Modal closeModal={props.closeModal}>
            {checkoutData}
        </Modal>
  
    )
}

export default CheckOut
