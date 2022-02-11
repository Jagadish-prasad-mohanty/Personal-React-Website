import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router';
import IndivisualProduct from '../Products/IndivisualProduct/IndivisualProduct';
import classes from './Resturants.module.css';

function Resturants() {
    const products=useSelector(state=>state.products.products);
    const {id}=useParams();
    const resturantProducts=products.map(item=>{
        if (item.hotelName===id){
            return <IndivisualProduct key={item.id} id={item.id} name={item.name} price={item.price} imgLink={item.image} hotelName={item.hotelName}/>
        }
    })
    return (
        <div className={classes.Products}>
            {resturantProducts}
        </div>
    )
}

export default Resturants
