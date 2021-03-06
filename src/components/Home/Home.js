import React, { useEffect } from "react";
import MealHomeImage from "../../assets/image/meals.jpg";
import MealsSummary from "./HomeContent/MealsSummary";
import classes from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { initiateCart } from "../../store/actions/cartAction";
import HomeContent from "./HomeContent/HomeContent";
import Card from "../UI/Card/Card";
function Home() {
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("[Home.js] -> userLoggedIn", userLoggedIn);

  return (
    <div className={classes.Home}>
      <div className={classes.HomeImage}>
        <img src={MealHomeImage} />
      </div>
      <MealsSummary />
      <HomeContent />
      
    </div>
  );
}

export default Home;
