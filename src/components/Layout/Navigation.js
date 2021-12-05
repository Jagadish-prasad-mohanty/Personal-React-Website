import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'
function Navigation() {
    return (
        <>
            <ul className={classes.navigation}>
                <li>
                    <NavLink to="/"><h3>RedEye</h3></NavLink>
                </li>
                <div className={classes.nav}>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth">Login</NavLink>
                    </li>
                </div>
                    
            </ul>
        </>
    )
}

export default Navigation
