import React ,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../store/actions/cartAction';
import { fetchProducts } from '../../store/actions/productAction';
import classes from './Layout.module.css';
import Button from '../UI/Button/Button';
import Navigation from './Navigation';
import Footer from './Footer';
function Layout(props) {
    const dispatch=useDispatch();
    const currentUser=localStorage.getItem('user');
    useEffect(()=>{
        if (currentUser)
        dispatch(fetchCart());
        dispatch(fetchProducts());
    },[currentUser])
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
