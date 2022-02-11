import React from "react";
import classes from "./IndivisualProduct.module.css";
import NaanImage from "../../../assets/image/naan.jpg";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import {
  addFevorite,
  incrFevorite,
  removeFevorite,
} from "../../../store/actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function IndivisualProduct(props) {
  const currentUser = localStorage.getItem("user").split(".")[0];
  console.log("INdPeoduct -> userToken", currentUser);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const productAddToCartHandler = (e) => {
    e.stopPropagation();
    dispatch(addFevorite({ id: props.id, price: props.price }));
  };
  const productRemoveFromCartHandler = (e) => {
    e.stopPropagation();
    dispatch(removeFevorite({ id: props.id, currentUser: currentUser }));
  };
  const productIncrOfCartHandler = (e) => {
    e.stopPropagation();
    dispatch(
      incrFevorite({
        id: props.id,
        price: props.price,
        currentUser: currentUser,
      })
    );
  };
  const showProductDetails = () => {
    navigate(`/product-details/${props.name}`, { replace: false });
  };
  const openResturantProducts = (e) => {
    e.stopPropagation();
    navigate(`/resturants/${props.hotelName}`);
  };
  const inCart =
    cart.findIndex((item) => item.id === props.id) !== -1 ? true : false;
  return (
    <Card className={classes.Product}>
      <div className={classes.ProductImg}>
        <img src={props.imgLink} />
      </div>
      <div className={classes.ProductDetails}>
        <div className={classes.ProductDetail}>
          <h3 className={classes.Product_Head}>{props.name}</h3>
          <div className={classes.ProductSummary}>
            <p
              style={{ color: "blue", cursor: "pointer" }}
              onClick={openResturantProducts}
            >
              {props.hotelName}
            </p>

            <p>
              <i>{props.price} Rupee /-</i>{" "}
            </p>
          </div>
        </div>
        {!props.forCart && (
          <div className={classes.ProductButtons}>
            <Button
            className={classes.BtnCart_desktop}
              btnName={inCart ? "Item in Cart" : "Add to Cart"}
              disabled={inCart}
              onclick={productAddToCartHandler}
            />
            <Button
            className={classes.BtnCart_mobile}
              btnName={inCart ? <i class="fa-solid fa-cart-shopping"></i> : <i class="fa-solid fa-cart-plus"></i>}
              
              disabled={inCart}
              onclick={productAddToCartHandler}
            />
            {/* <Button btnName="Details" onclick={showProductDetails} /> */}
          </div>
        )}
        {props.forCart && (
          <p className={classes.Count}>
            <i class="fas fa-times"></i> {props.count}
          </p>
        )}
        {props.forCart && (
          <div className={classes.IncrDecrBtn}>
            <div className={classes.CartButtons}>
              <Button
                btnName={<i class="fas fa-plus"></i>}
                onclick={productIncrOfCartHandler}
              />
              <Button
                btnName={<i class="fas fa-minus"></i>}
                onclick={productRemoveFromCartHandler}
              />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default IndivisualProduct;
