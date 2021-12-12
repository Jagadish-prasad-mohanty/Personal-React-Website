import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../store/actions/authActions';
import CartButton from './CartButton/CartButton';
import classes from './Navigation.module.css'
function Navigation(props) {
    const dispatch=useDispatch();
    const state=useSelector(state=>state.auth);
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
                        <NavLink to="/cart"><CartButton/></NavLink>
                    </li>}
                    {!state.isLoggedIn && <li>
                        <NavLink className={classes.AuthButton} to="/auth" style={{paddingTop:'0.2rem'}}>Login</NavLink>
                    </li>}
                    {state.isLoggedIn && <li>
                        <button className={classes.AuthButton} onClick={onLogoutHandler}>Logout</button>
                    </li>}
                    {state.isLoggedIn && <li>
                        <NavLink to="/profile">
                        <i class="far fa-user-circle"></i>
                        {/* {state.userEmail.substr(0,7)+".."} */}
                        </NavLink>
                    </li>}
                </div>
                    
            </ul>
        </>
    )
}

export default Navigation
