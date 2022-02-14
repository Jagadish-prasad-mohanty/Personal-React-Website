import React from "react";
import classes from "./MyOrders.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../UI/Button/Button";
function MyOrders() {
    const navigate=useNavigate();
  const orders=useSelector(state=>state.orders.orders);
  const orderLength=useSelector(state=>state.orders.orderLength);
  console.log("orderLength : ",orderLength);
  const order = orders.map((items,index) => {
    return (
      <li key={Math.random()} className={classes["cart-item"]}>
        <div className={classes["item-summery"]}>
          <h2 onClick={()=>{}}>Order {index+1}</h2>
            <Button btnName="Order Details" onclick={()=>{navigate(`/my-order/${index}`)}}/>
        </div>
      </li>
    );
  });
  return (
    <div className={classes.MyOrders}>
      <ul style={{ height: "15rem", overflow: "auto" }}>{!orderLength!==0?order:<h2>Start placing order and have a meal</h2>}</ul>
      
    </div>
  );
}

export default MyOrders;
