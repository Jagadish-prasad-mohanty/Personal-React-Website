import React from 'react'
import classes from './IndivisualProduct.module.css';
import NaanImage from '../../../assets/image/naan.jpg';
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button';
import { addFevorite, incrFevorite, removeFevorite } from '../../../store/actions/cartAction';
import { useDispatch, useSelector } from 'react-redux';

function IndivisualProduct(props) {
    const cart=useSelector(state=>state.cart.cart)
    const dispatch=useDispatch();
    const productAddToCartHandler= () =>{
        dispatch(addFevorite({id:props.id,price:props.price}))
    }
    const productRemoveFromCartHandler= () =>{
        dispatch(removeFevorite(props.id))
    }
    const productIncrOfCartHandler= ()=>{
        dispatch(incrFevorite({id:props.id,price:props.price}))
    }
    const inCart= cart.findIndex(item=>item.id===props.id)!==-1?true:false
    return (
        <Card className={classes.Product}>
            <div className={classes.ProductImg}>
                <img src={props.imgLink}/>
            </div>
            <div className={classes.ProductDetails}>
                <div className={classes.ProductDetail}>
                    <h3>{props.name}</h3>
                    <div className={classes.ProductSummary}>
                        <p style={{color:'blue'}}>{props.hotelName}</p>
                        <p><i>{props.price} Rupee /-</i> </p>
                    </div>
                </div>
                {!props.forCart && <div className={classes.ProductButtons}>
                
                 <Button btnName={inCart?"Item in Cart":"Add to Cart"} onclick={productAddToCartHandler}/>
                 <Button btnName="Details"/>
                
                
                </div>}
                {props.forCart && <p className={classes.Count}><i class="fas fa-times"></i> {props.count}</p>}
                {props.forCart && <div className={classes.IncrDecrBtn}>

               <Button btnName="+" onclick={productIncrOfCartHandler}/>
                 <Button btnName="-" onclick={productRemoveFromCartHandler}/>
                </div>}

            </div>
        
        </Card>
    )
}

export default IndivisualProduct
