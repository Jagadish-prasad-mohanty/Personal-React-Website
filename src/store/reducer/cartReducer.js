import NaanImage from '../../assets/image/naan.jpg';
import ButterChickenImage from '../../assets/image/butter-chicken.jpg';
import ButterPaneerImage from '../../assets/image/butter-chicken.jpg';
import ChilliChickenImage from '../../assets/image/chilli-chicken.jpg';
import ChilliMushroomImage from '../../assets/image/chilli-mushroom.jpg';
import MuttonKassaImage from '../../assets/image/mutton-kassa.jpg';
import TandooriRotiImage from '../../assets/image/tandoori-roti.jpg';
import React from 'react';
import { ADD_TO_CART,INCR_THE_CART,REMOVE_FROM_CART } from '../actions/cartAction';
let initialCartState={
    cart:[],
    totalCount:0,
    totalAmount:0
}
// fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Products.json").then((response)=>response.json()).then((data)=>{
//         const fetchedProducts=[];
//         for (let key in data ){
//             fetchedProducts.push({
//                 id:data[key].id,
//                 name:data[key].name,
//                 price:data[key].price,
//                 image:data[key].image,
//                 hotelName:data[key].hotelName,
//                 isFev:data[key].isFev
//             })
//         }
//         console.log("[productReducer-> fetchedOroduct]1",fetchedProducts);
//         // setProducts(fetchedProducts);
//         initialProductState={products:[...fetchedProducts]};
//         console.log("[productReducer-> fetchedOroduct]2",initialProductState);
//         // dispatch(initiateProducts(fetchedProducts))
//         });
// // console.log("[productReducer-> fetchedOroduct]2",initialProductState);
const cartReducer= (state=initialCartState,action) =>{
    console.log("[productReducer-> fetchedOroduct]4",state);
    let updatedCart;
    let newCount;
    let newTotal;
    let index;
    switch(action.type){
        case ADD_TO_CART:
            updatedCart=[...state.cart];
            index=updatedCart.findIndex(item=>item.id===action.productData.id)
            if (index===-1){
                updatedCart.push({id:action.productData.id,count:1,price:action.productData.price});
                newCount=state.totalCount+1;
                newTotal=state.totalAmount+action.productData.price;
            }
            else{
                alert("Product is already in the Cart")
                return state
            }
            
           
            return {
                ...state,
                cart:updatedCart,
                totalCount:newCount,
                totalAmount:newTotal
            }
        case INCR_THE_CART:
            // const updatedProducts=[...state.products];
            // console.log("[productReducer-> fetchedOroduct3]",updatedProducts);
            // const updatedProductIndex=updatedProducts.findIndex(item=>{ 
            //     console.log(item.id,action.id); 
            //     return action.id===item.id
            // });
            // console.log(updatedProductIndex,action.id);
            // const updatedProduct=updatedProducts[updatedProductIndex];
            // console.log(updatedProduct);
            // updatedProduct.isFev=true;
            // updatedProducts[updatedProductIndex]=updatedProduct

            // ** Add data to cart **
            updatedCart=[...state.cart];
            //action.productData={id:'id'}
            index=updatedCart.findIndex(item=>item.id===action.productData.id)
            if (index===-1){
                updatedCart.push({id:action.productData.id,count:1,price:action.productData.price});
            }
            else{
                const updatedItem={...updatedCart[index],
                    count:updatedCart[index].count+1,
                    price:updatedCart[index].price+action.productData.price};
                updatedCart[index]=updatedItem;
            }
            newCount=state.totalCount+1;
            newTotal=state.totalAmount+action.productData.price;
            //// **send cart data with user to api **
            // fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Cart.json",
            // {
            //     method:'POST',
            //     body:JSON.stringify({
            //         token:action.productData.token,
            //         id:action.productData.id
            //     }),
            //     headers:{
            //         "Content-Type": "application/json",
            //     }

            // }).then((response)=>response.json()).then((data)=>{
            //     console.log(data);
            // });
            return {
                ...state,
                cart:updatedCart,
                totalCount:newCount,
                totalAmount:newTotal
            }
        case REMOVE_FROM_CART:
            // const updatedProducts=[...state.products];
            // console.log("[productReducer-> fetchedOroduct3]",updatedProducts);
            // const updatedProductIndex=updatedProducts.findIndex(item=>{ 
            //     console.log(item.id,action.id); 
            //     return action.id===item.id
            // });
            // console.log(updatedProductIndex,action.id);
            // const updatedProduct=updatedProducts[updatedProductIndex];
            // console.log(updatedProduct);
            // updatedProduct.isFev=true;
            // updatedProducts[updatedProductIndex]=updatedProduct

            // ** Remove data to cart **
            updatedCart=[...state.cart];
            //action.productData={id:'id'}
            index=updatedCart.findIndex(item=>item.id===action.productData.id)
            const priceOfItem=updatedCart[index].price/updatedCart[index].count;
            if (index!==-1){
                if(updatedCart[index].count===1){
                    updatedCart=updatedCart.filter(item=>item.id!==action.productData.id)
                }else{
                    const updatedItem={...updatedCart[index],
                        count:updatedCart[index].count-1,
                        price:updatedCart[index].price-priceOfItem}
                    newTotal=state.totalAmount-priceOfItem;
                    updatedCart[index]=updatedItem;
                
            }
                
            
            newCount=state.totalCount-1;
        }
            
            //// **send cart data with user to api **
            // fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Cart.json",
            // {
            //     method:'POST',
            //     body:JSON.stringify({
            //         token:action.productData.token,
            //         id:action.productData.id
            //     }),
            //     headers:{
            //         "Content-Type": "application/json",
            //     }

            // }).then((response)=>response.json()).then((data)=>{
            //     console.log(data);
            // });
            return {
                ...state,
                cart:updatedCart,
                totalCount:newCount,
                totalAmount:newTotal
            }
        default:
            return state
    }
}

export default cartReducer;

 // {
        //     id:"1",
        //     name:'Butter Naan',
        //     price:25,
        //     image:NaanImage,
        //     hotelName:"Rasmi Hotel",
        //     isFev:false
        // },    
        // {
        //     id:"2",
        //     name:'Tanduri Roti',
        //     price:15,
        //     image:TandooriRotiImage,
        //     hotelName:"Rasmi Hotel",
        //     isFev:false
        // },
        // {
        //     id:"3",
        //     name:'Paneer Butter Masala',
        //     price:140,
        //     image:ButterPaneerImage,
        //     hotelName:"Rasmi Hotel",
        //     isFev:false
        // },
        // {
        //     id:"4",
        //     name:'Chili Mushroom',
        //     price:150,
        //     image:ChilliMushroomImage,
        //     hotelName:"Rasmi Hotel",
        //     isFev:false
        // },
        // {
        //     id:"5",
        //     name:'Chicken Chili',
        //     price:120,
        //     image:ChilliChickenImage,
        //     hotelName:"Rasmi Hotel",
        //     isFev:false
        // },
        // {
        //     id:"6",
        //     name :"Mutton Kassa",
        //     price:250,
        //     image:MuttonKassaImage,
        //     hotelName:"Rasmi Hotel",
        //     isFev:false
        // },
        // {
        //     id:"7",
        //     name:'Chicken Butter Masala',
        //     price:140,
        //     image:ButterChickenImage,
        //     hotelName:"Rasmi Hotel",
        //     isFev:false
        // }