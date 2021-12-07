import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../store/actions/authActions';
import classes from './Navigation.module.css'
function Navigation(props) {
    const dispatch=useDispatch();
    const state=useSelector(state=>state);
    const onLogoutHandler= () =>{
        console.log("[Navigation] logout done!!" );
        props.show("Logged out successfully.","complete")
        dispatch(logoutHandler());
    }
    return (
        <>
            <ul className={classes.navigation}>
                <li>
                    <NavLink to="/"><h3>RedEye</h3></NavLink>
                </li>
                <div className={classes.nav}>
                    {state.isLoggedIn && <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>}
                    {state.isLoggedIn && <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>}
                    {!state.isLoggedIn && <li>
                        <NavLink to="/auth">Login</NavLink>
                    </li>}
                    {state.isLoggedIn && <li>
                        <button onClick={onLogoutHandler}>Logout</button>
                    </li>}
                </div>
                    
            </ul>
        </>
    )
}

export default Navigation
