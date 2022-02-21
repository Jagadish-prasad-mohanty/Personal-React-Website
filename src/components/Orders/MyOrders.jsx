import React from "react";
import classes from "./MyOrders.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../UI/Button/Button";
import Spinner from '../UI/Spinner/Spinner'
function MyOrders() {
  const navigate = useNavigate();
  const orders = useSelector((state) => state.orders.orders);
  const isLoading = useSelector((state) => state.orders.isLoading);
  console.log("orderLength : ", orders.length);
  const order = orders.map((items, index) => {
    return (
      <li key={Math.random()} className={classes["cart-item"]}>
        <div className={classes["item-summery"]}>
          <h2 onClick={() => {}}>Order {index + 1}</h2>
          <Button
            btnName="Order Details"
            onclick={() => {
              navigate(`/my-order/${index}`);
            }}
          />
        </div>
      </li>
    );
  });
  if (isLoading){
    return <Spinner/>
  }
  return (
    <div className={classes.MyOrders}>
      {/* <h1>{orderLength}</h1> */}
      <ul style={{ height: "15rem", overflow: "auto" }}>
        {orders.length !== 0 ? (
          order
        ) : (
          <h2>Start placing order</h2>
        )}
      </ul>
    </div>
  );
}

export default MyOrders;
