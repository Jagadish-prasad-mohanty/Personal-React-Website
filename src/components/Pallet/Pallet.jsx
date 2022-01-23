import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import IndivisualProduct from "../Products/IndivisualProduct/IndivisualProduct";
function Pallet() {
    const products=useSelector(state=>state.products.products);
    const {id}=useParams();
    const palletProducts=products.map(item=>{
        if (item.catagory===id){
            return <IndivisualProduct key={item.id} id={item.id} name={item.name} price={item.price} imgLink={item.image} hotelName={item.hotelName}/>
        }
    })
  return <div>{palletProducts}</div>;
}

export default Pallet;
