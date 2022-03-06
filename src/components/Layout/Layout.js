import React ,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../store/actions/cartAction';
import { fetchProducts } from '../../store/actions/productAction';
import { fetchOrder } from '../../store/actions/orderAction';
import classes from './Layout.module.css';
import Button from '../UI/Button/Button';
import Navigation from './Navigation';
import Footer from './Footer';
import { refreshTimeOut } from '../../store/actions/authActions';

const remainingTimeCalc= (expTime) =>{
    const currTime=new Date().getTime();
    console.log("[authReducer]",expTime,currTime);
    const adjExpTime=new Date(expTime);

    const remainingTime=adjExpTime-currTime;
    return remainingTime;
    
}
const retrivedStoredToken= ()=>{
    const storedToken= localStorage.getItem('token');
    const expTime= localStorage.getItem('expTime');

    const remainingTime=remainingTimeCalc(expTime)
    if (remainingTime<=30000){
        localStorage.removeItem('token');
        localStorage.removeItem('expTime');
        return null;
    }

    return {
        token:storedToken,
        remainingTime
    }
}
function Layout(props) {
    const dispatch=useDispatch();
    const currentUser=localStorage.getItem('user');
    const initialTokenData= retrivedStoredToken();
    useEffect(()=>{
        if (currentUser)
        dispatch(fetchCart());
        dispatch(fetchProducts());
        dispatch(fetchOrder())
    },[currentUser])

    useEffect(()=>{
        if (initialTokenData)
        dispatch(refreshTimeOut(initialTokenData))
    },[initialTokenData]);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return (
        <div className={props.className?props.className:null}>
            <Navigation show={props.show}/>
            <main className={classes.LayoutMain}>{props.children}
            <Button
            className={classes.ScrollTop}
            onclick={scrollToTop}
            btnName={<i class="fas fa-arrow-up"></i>}
          />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
