import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IndivisualProduct from "./IndivisualProduct/IndivisualProduct";
import Spinner from "../UI/Spinner/Spinner";
import { initiateCart } from "../../store/actions/cartAction";
import { fetchProducts, initProducts } from "../../store/actions/productAction";
import classes from "./Products.module.css";
import { useLocation, useNavigate, useParams } from "react-router";
import Button from "../UI/Button/Button";
function Products() {
  // const products= useSelector(state=>state.products);
 
  const { queryParams } = useParams();
  const param = queryParams.split("=")[1];
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);

  const [isAsc, setIsAsc] = useState(param === "asc" ? true : false);
  const navigate = useNavigate();
  const sortProducts = (products, isAsc) => {
    return products.sort((qA, qB) => {
      if (isAsc) {
        return qA.price > qB.price ? 1 : -1;
      } else {
        return qB.price > qA.price ? 1 : -1;
      }
    });
  };

  
  

  //   console.log("Products -> param",queryParams.get('sort'));
  const sortedProducts = sortProducts(products, isAsc);
  const productItems = sortedProducts.map((item) => (
    <IndivisualProduct
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      imgLink={item.image}
      hotelName={item.hotelName}
      forCart={false}
    />
  ));
  return (
    <div>
      <div className={classes.St}>
        <Button
          className={classes.Sort}
          btnName={isAsc ? "Sort Desc" : "Sort Asc"}
          onclick={() => {
            navigate(`/products/sort=${isAsc ? "desc" : "asc"}`);
            setIsAsc((prevState) => {
              return !prevState;
            });
          }}
        />
      </div>
      {isLoading && <Spinner />}
      {!isLoading && productItems}
    
    </div>
  );
}

export default Products;
