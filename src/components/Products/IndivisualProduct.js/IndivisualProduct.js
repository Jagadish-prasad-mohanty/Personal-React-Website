import React from 'react'
import classes from './IndivisualProduct.module.css';
import NaanImage from '../../../assets/image/naan.jpg';
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button';
function IndivisualProduct() {
    return (
        <Card className={classes.Product}>
            <div className={classes.ProductImg}>
                <img src={NaanImage}/>
            </div>
            <div className={classes.ProductDetails}>
                <div className={classes.ProductDetail}>
                    <h3>Tanduri Butter Naan</h3>
                    <div className={classes.ProductSummary}>
                        <p style={{color:'blue'}}>Rasmi Hotel</p>
                        <p><i>30 Rupee /-</i> </p>
                    </div>
                </div>
                <div className={classes.ProductButtons}>

                <Button btnName="Add to Cart"/>
                <Button btnName="Details"/>
                </div>

            </div>
        
        </Card>
    )
}

export default IndivisualProduct
