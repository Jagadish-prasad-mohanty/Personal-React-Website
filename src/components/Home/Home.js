import React,{useEffect} from 'react'
import MealHomeImage from "../../assets/image/meals.jpg";
import MealsSummary from './MealsSummary';
import classes from './Home.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { initiateCart } from '../../store/actions/cartAction';

function Home() {
    const userLoggedIn=useSelector(state=>state.auth.isLoggedIn);
    console.log("[Home.js] -> userLoggedIn",userLoggedIn);
    const dispatch= useDispatch();
    const currentUser= localStorage.getItem('user').split(".")[0];
    
      useEffect(()=>{
        fetch(`https://reactpersonalproject-default-rtdb.firebaseio.com/cart/${currentUser}.json`
          ).then(response=>response.json()).then(resData=>{
            console.log("initiateCart -> CartAction.js",resData);
            console.log("[CartAction.js -> currentUser]",currentUser);
              dispatch(initiateCart(resData));
          }).catch(error=>{
            console.log(error.message);
          });
      },[])
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
