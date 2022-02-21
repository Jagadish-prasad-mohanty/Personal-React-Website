import React, { useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../store/actions/authActions';
import CartButton from './CartButton/CartButton';
import classes from './Navigation.module.css'
function Navigation(props) {
    const dispatch=useDispatch();
    const state=useSelector(state=>state.auth);
    const navigate=useNavigate();
    
    const onLogoutHandler= () =>{
        console.log("[Navigation] logout done!!" );
        props.show("Logged out successfully.","complete")
        dispatch(logoutHandler());
        navigate('/auth')

    }

    // For mobile view
    const [showMenu,setShowMenu]= useState(false);
    const cartCount=useSelector(state=>state.cart.totalCount);
    const navMenuToggler= (e)=>setShowMenu(prevState=>!prevState);

    return (
        <>
            <ul className={classes.navigation}>
                <li onClick={(e)=>setShowMenu(false)}>
                    <NavLink to="/"><h3>RedEye</h3></NavLink>
                </li>
                <div className={classes.hb_mobile}>
                    <li onClick={navMenuToggler}>{!showMenu?<i class="fas fa-bars"></i>:<i class="fas fa-times"></i>}</li>
                </div>
                <div className={classes.nav}>
                    {state.isLoggedIn && <li>
                        <NavLink className={(navData) => (navData.isActive ? classes.active : classes.hover)} to="/products">Platters</NavLink>
                    </li>}
                    {state.isLoggedIn && <li>
                        <NavLink  to="/cart"><CartButton/></NavLink>
                    </li>}
                    {state.isLoggedIn && <li>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : classes.hover)} to="/my-order">My Orders</NavLink>
                        </li>}
                    {!state.isLoggedIn && <li>
                        <NavLink className={classes.AuthButton} to="/auth" style={{paddingTop:'0.2rem'}}>Login</NavLink>
                    </li>}
                    {state.isLoggedIn && <li>
                        <button className={classes.AuthButton} onClick={onLogoutHandler}>Logout</button>
                    </li>}
                    {state.isLoggedIn && <li>
                        <NavLink to="/profile" className={(navData) => (navData.isActive ? classes.active : classes.hover)}>
                        <i class="far fa-user-circle"></i>
                        {/* {state.userEmail.substr(0,7)+".."} */}
                        </NavLink>
                    </li>}
                </div>
                    
            </ul>

            {/* mobile screan */}
            <div >
                <ul className={`${classes.menu_mobile} ${showMenu?classes.menu_mobile_show:''}`}>
                    {state.isLoggedIn && showMenu && <li onClick={navMenuToggler}>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : classes.hover)} to="/products">Platters</NavLink>
                        </li>}
                        {state.isLoggedIn && showMenu && <li onClick={navMenuToggler}>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : classes.hover)} to="/cart"><div className={classes.cartButton_mobile}>
                                <h3>Cart</h3>
                                <p>{cartCount}</p>
                            </div></NavLink>
                        </li>}
                        {state.isLoggedIn && showMenu && <li onClick={navMenuToggler}>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : classes.hover)}  to="/my-order">My Orders</NavLink>
                        </li>}
                        {!state.isLoggedIn && showMenu && <li onClick={navMenuToggler}>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : classes.hover)} className={classes.AuthButton} to="/auth" style={{paddingTop:'0.2rem'}}>Login</NavLink>
                        </li>}
                        {state.isLoggedIn && showMenu && <li onClick={navMenuToggler}>
                            <NavLink className={(navData) => (navData.isActive ? classes.active : classes.hover)} to="/profile">
                            Profile
                            {/* {state.userEmail.substr(0,7)+".."} */}
                            </NavLink>
                        </li>}     
                        {state.isLoggedIn && showMenu && <li onClick={navMenuToggler}>
                            <li onClick={onLogoutHandler}>Logout</li>
                        </li>}
                </ul>
                {showMenu && <div className={classes.menu_backdrop} onClick={navMenuToggler}></div>}
            </div>
        </>
    )
}

export default Navigation
