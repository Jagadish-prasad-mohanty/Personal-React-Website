import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../UI/Modal/Modal';
import classes from './OrderPreview.module.css';
import Button from '../UI/Button/Button';
import { resetCart } from '../../store/actions/cartAction';
import { useNavigate } from 'react-router-dom';
const OrderPreview =(props)=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const items=useSelector(state=>state.cart.cart);
    const products=useSelector(state=>state.products.products);
    const totalAmount=useSelector(state=>state.cart.totalAmount);
    const order=items.map(item=>{
        const index=products.findIndex(itm=>itm.id===item.id);
        const name=products[index].name;
        return <li key={item.id} className={classes["cart-item"]}>
         <div className={classes["item-summery"]}>
                <h2>{name}</h2>
                <div className={classes["item-data"]}>
                    <span className={classes.price}>{`${'\u20A8'} ${item.price.toFixed(2)}`}</span>
                    <span className={classes.amount}>{item.count}</span>
                </div>
            </div>
            </li>
    })
    const modalOnClick= ()=>{
        dispatch(resetCart());
        props.closeModal();
        navigate('/');
    }
    return <Modal closeModal={modalOnClick} >
        <h2>Thank You For Your Intrest!!</h2>
        <br/>
        <h4>You have successfully ordered your meals &#128519;</h4>
        <h5>Bellow is your order details</h5>
        <ul style={{height:'15rem',overflow:'auto'}}>

        {order}
        </ul>
        {<div className={classes.total}>
            <span>Total Amount</span>
                <span>{totalAmount}</span> 
            </div>}

        <h3>You order will be there in <span style={{color:'red'}}>15 min</span></h3>
        <div className={classes.actions}>
        <Button className={classes.button} btnName="Close" onclick={modalOnClick}></Button>
    </div>
    </Modal>
}

export default OrderPreview;