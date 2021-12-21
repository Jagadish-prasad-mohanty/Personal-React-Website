import React from 'react';
import Card from '../../UI/Card/Card';
import NaanImage from '../../../assets/image/naan.jpg';
import classes from './ProductDetails.module.css';
import Button from '../../UI/Button/Button';

function ProductDetails(props) {
    return (
        <div>
            <div className={classes.productImage}>
                <img src={NaanImage}/>
            </div>
            <Card className={classes.productDetails}>
                <h2>Butter Naan</h2>
                <p>Butter naan is soft and extremely yummy, it is often served at buffets in festivals or special occasions. Naan, topped with melted butter is a delicious Indian bread. The best part is that we can easily make it at home. </p>
            </Card>
            <div className={classes.productControls}>
                <Button btnName="Add to Cart"/>
            </div>
        </div>
    )
}

export default ProductDetails
