import React ,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../store/actions/cartAction';
import { fetchProducts } from '../../store/actions/productAction';
import Navigation from './Navigation'
function Layout(props) {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchCart());
        dispatch(fetchProducts());
    },[])
    return (
        <div className={props.className?props.className:null}>
            <Navigation show={props.show}/>
            <main style={{marginTop:'3rem'}}>{props.children}</main>
        </div>
    )
}

export default Layout
