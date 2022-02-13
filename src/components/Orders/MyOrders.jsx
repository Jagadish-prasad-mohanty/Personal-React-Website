import React from "react";
import classes from "./MyOrders.module.css";
import { useSelector } from "react-redux";
function MyOrders() {
  const items = useSelector((state) => state.cart.cart);
  const products = useSelector((state) => state.products.products);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const order = items.map((item) => {
    const index = products.findIndex((itm) => itm.id === item.id);
    const name = products[index].name;
    return (
      <li key={item.id} className={classes["cart-item"]}>
        <div className={classes["item-summery"]}>
          <h2>{name}</h2>
          <div className={classes["item-data"]}>
            <span className={classes.price}>{`${"\u20A8"} ${item.price.toFixed(
              2
            )}`}</span>
            <span className={classes.amount}>{item.count}</span>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className={classes.MyOrders}>
      <ul style={{ height: "15rem", overflow: "auto" }}>{order}</ul>
      {
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
      }
    </div>
  );
}

export default MyOrders;
