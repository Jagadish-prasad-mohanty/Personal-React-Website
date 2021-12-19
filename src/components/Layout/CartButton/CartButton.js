import React from 'react'
import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';
function CartButton() {
    const cartCount=useSelector(state=>state.cart.totalCount)
    return (
        <button className={classes.CartButton}>
            <i class="fas fa-cart-plus"></i>
            <span className={classes.CartText}>My Cart</span>
            <span className={classes.CartCount}>{cartCount}</span>
        </button>
    )
}

export default CartButton
