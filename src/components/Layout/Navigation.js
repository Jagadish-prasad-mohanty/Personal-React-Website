import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'
function Navigation() {
    return (
        <>
            <ul className={classes.navigation}>
                <li>
                    <NavLink to="/">RedEye</NavLink>
                </li>
                <div className={classes.nav}>
                    <li>
                        <NavLink to="/products">Priducts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                </div>
                    
            </ul>
        </>
    )
}

export default Navigation
