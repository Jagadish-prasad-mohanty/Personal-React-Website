import React, { useState, useEffect } from 'react';
import Modal from '../UI/Modal/Modal';
import { useSelector } from 'react-redux';
import classes from './AddressConfirm.module.css';
import CartSection from './CartSection';
import Button from '../UI/Button/Button';
import OrderAddress from './OrderAddress';
import { defaultAddress } from '../../store/actions/cartAction';
import { useNavigate} from 'react-router-dom';

function AddressConfirm(props) {
    const cart=useSelector(state=>state.cart);
    console.log("[CheckOut]-> cartData",cart.cart);
    const products= useSelector(state=>state.products.products);
    const navigate= useNavigate()
    const [orderAddress, setOrderAddress]=useState(false);
    const checkoutData=cart.cart.map(item=>{
        const index=products.findIndex(itm=>itm.id===item.id)
        console.log(index);
        if (index !==-1){
            return <div className={classes.checkOutItem} key={products[index].id}>
                    <h3 className={classes.checkOutItemTitle}>{products[index].name}</h3>
                    <p><i class="fas fa-times"></i> {item.count}</p>
                    <p>: {products[index].price*item.count}</p>
            </div>
        }
    });


    const fillOrderAddressHandler=()=>{
        if (orderAddress)
            navigate('/check-out');
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

export default AddressConfirm
