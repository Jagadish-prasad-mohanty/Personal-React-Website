import React from 'react'
import classes from './CartButton.module.css';
function CartButton() {
    return (
        <button className={classes.CartButton}>
            <i class="fas fa-cart-plus"></i>
            <span className={classes.CartText}>My Cart</span>
            <span className={classes.CartCount}>3</span>
        </button>
    )
}

export default CartButton
