import React, { useEffect } from 'react';
import Card from '../../UI/Card/Card';
import NaanImage from '../../../assets/image/naan.jpg';
import classes from './ProductDetails.module.css';
import Button from '../../UI/Button/Button';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/actions/productAction';
import Spinner from '../../UI/Spinner/Spinner';

function ProductDetails(props) {
    const { id }=useParams();
    let productDetails={};
    const products=useSelector(state=>state.products.products);
    const isLoading=useSelector(state=>state.products.isLoading);
    const cart=useSelector(state=>state.cart.cart);
    
    productDetails={...products.filter(product=>product.name===id)[0]};
    let disabled=false;
    cart.forEach(item=>{
        if (item.id === productDetails.id){
            disabled=true
        }
    })
    console.log("ProductDetails -> products",products);
    console.log("ProductDetails -> productDetails",productDetails);
    if (isLoading)
        return <Spinner />
    return (
        <div className={classes.productDetails}>
            <div className={classes.productImage}>
                <img src={NaanImage}/>
            </div>
            <div className={classes.productContent}>
                <h2>{productDetails.name}</h2>
                <p>{productDetails.description} </p>
                <div className={classes.productInfo}>
                    <h5>{productDetails.hotelName}</h5>
                    <p><i>{productDetails.price}-/</i> </p>
                </div>
                <div className={classes.productControls}>
                    <Button disabled={disabled} btnName="Add to Cart"/>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetails
