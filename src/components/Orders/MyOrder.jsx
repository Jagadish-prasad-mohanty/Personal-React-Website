import React from "react";
import classes from "./MyOrder.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
function MyOrder() {
    const {orderId}=useParams();
  const orders = useSelector((state) => state.orders.orders)[orderId].orderItems;
  console.log("MyOrder -> order -> 7 : ",orders);
  const totalAmount=useSelector((state) => state.orders.orders)[orderId].totalAmount;
  const products=useSelector(state=>state.products.products);
  console.log(orders);
  const myOrder = orders.map((item) => {
    const index = products.findIndex((itm) => itm.id === item.id);
    const name = products[index].name;
    return (
        <li key={item.id} className={classes["cart-item"]}>
        <div className={classes["item-summery"]}>
               <h2>{name}</h2>
               <div className={classes["item-data"]}>
                   <span className={classes.price}>{`${'\u20A8'} ${item.price.toFixed(2)}`}</span>
                   <span className={classes.amount}>{item.count}</span>
               </div>
           </div>
           </li>
    );
  });
  return (
    <div className={classes.MyOrder}>
      <ul >{myOrder}</ul>
      
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount+totalAmount*0.1}</span>
        </div>
      
    </div>
  );
}

export default MyOrder;
