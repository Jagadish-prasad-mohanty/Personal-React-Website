import React from 'react';
import { useSelector } from 'react-redux';
import classes from './HomeContent.module.css';
import {useNavigate} from 'react-router-dom'
function HomeContent() {
    const navigate=useNavigate();
    const goToPallet= (palletName)=>{
        navigate(`pallet/${palletName}`);
    }
  return <div className={classes.HomeContent}>
        <div className={classes.Service} onClick={()=>goToPallet('Chinese')}>
                <div className={classes.ServiceImage}>
                    <img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2997%2Ftrend20201119134018.jpg" alt="Chinese Pallet" />
                </div>
                <h2>Chinees Pallet</h2>
        </div>
        <div className={classes.Service} onClick={()=>goToPallet('Indian')}>
                <div className={classes.ServiceImage}>
                    <img src="https://sandinmysuitcase.com/wp-content/uploads/2021/01/Popular-Indian-Food-Dishes.jpg.webp" alt="Indian Pallet"/>
                </div>
                <h2>Indian Pallet</h2>
        </div>
        <div className={classes.Service} onClick={()=>goToPallet('Dessert')}>
                <div className={classes.ServiceImage}>
                    <img src="https://cdn.hswstatic.com/gif/desserts-update.jpg" alt="Dessert Pallet"/>
                </div>
                <h2>Dessert Pallet</h2>
        </div>
  </div>
}

export default HomeContent;
