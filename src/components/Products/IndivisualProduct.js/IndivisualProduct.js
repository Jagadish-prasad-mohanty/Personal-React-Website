import React from 'react'
import classes from './IndivisualProduct.module.css';
import NaanImage from '../../../assets/image/naan.jpg';
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button';
import { addFevorite, removeFevorite } from '../../../store/actions/cartAction';
import { useDispatch } from 'react-redux';

function IndivisualProduct(props) {
    const dispatch=useDispatch();
    const productAddToCartHandler= () =>{
        dispatch(addFevorite({id:props.id,price:props.price}))
    }
    const productRemoveFromCartHandler= () =>{
        dispatch(removeFevorite(props.id))
    }
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
                <div className={classes.ProductButtons}>
                
                {!props.forCart && <Button btnName="Add to Cart" onclick={productAddToCartHandler}/>}
                {!props.forCart && <Button btnName="Details"/>}
                {props.forCart && <h3>Count : {props.count}</h3>}
                {props.forCart && <Button btnName="Remove Item" onclick={productRemoveFromCartHandler}/>}
                </div>

            </div>
        
        </Card>
    )
}

export default IndivisualProduct
