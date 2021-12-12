import React from 'react'
import classes from './IndivisualProduct.module.css';
import NaanImage from '../../../assets/image/naan.jpg';
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button';
import { addFevorite } from '../../../store/actions/productAction';
import { useDispatch } from 'react-redux';

function IndivisualProduct(props) {
    const dispatch=useDispatch();
    const productAddToCartHandler= () =>{
        dispatch(addFevorite(props.id))
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
                </div>

            </div>
        
        </Card>
    )
}

export default IndivisualProduct
