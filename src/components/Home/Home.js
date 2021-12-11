import React from 'react'
import MealHomeImage from "../../assets/image/meals.jpg";
import MealsSummary from './MealsSummary';
import classes from './Home.module.css';
function Home() {
    return (
        <div className={classes.Home}>
        <div className={classes.HomeImage}>

         <img src={MealHomeImage}/>
        </div>
         <MealsSummary/>
        </div>
    )
}

export default Home
