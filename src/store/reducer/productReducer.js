import NaanImage from '../../assets/image/naan.jpg';
import ButterChickenImage from '../../assets/image/butter-chicken.jpg';
import ButterPaneerImage from '../../assets/image/butter-chicken.jpg';
import ChilliChickenImage from '../../assets/image/chilli-chicken.jpg';
import ChilliMushroomImage from '../../assets/image/chilli-mushroom.jpg';
import MuttonKassaImage from '../../assets/image/mutton-kassa.jpg';
import TandooriRotiImage from '../../assets/image/tandoori-roti.jpg';
import React from 'react';
import { ADD_FEVORITE,INITIATE_PRODUCTS } from '../actions/productAction';
let initialProductState={
    products:[
        {
            id:"1",
            name:'Butter Naan',
            price:25,
            image:NaanImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"2",
            name:'Tanduri Roti',
            price:15,
            image:TandooriRotiImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"3",
            name:'Paneer Butter Masala',
            price:140,
            image:ButterPaneerImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"4",
            name:'Chili Mushroom',
            price:150,
            image:ChilliMushroomImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"5",
            name:'Chicken Chili',
            price:120,
            image:ChilliChickenImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"6",
            name :"Mutton Kassa",
            price:250,
            image:MuttonKassaImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"7",
            name:'Chicken Butter Masala',
            price:140,
            image:ButterChickenImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        }

    ]
}
// const fetchMeals= async ()=>{
//     const response=await fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Products.json");
//     const data=await response.json();
//     // setIsLoading(false);
//     return data
// }
// fetchMeals().then((data)=>{
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
//         console.log("[productReducer-> fetchedOroduct]",fetchedProducts);
//         // setProducts(fetchedProducts);
//         initialProductState={...fetchedProducts}
    
//         // dispatch(initiateProducts(fetchedProducts))
//     });

const productReducer= (state=initialProductState,action) =>{
    switch(action.type){
        // case INITIATE_PRODUCTS:
        //     console.log("[productReducer]",action.products);
        //     return {
        //         ...state,
        //         products:action.products
        //     }
        case ADD_FEVORITE:
            const updatedProducts=[...state.products];
            console.log(updatedProducts);
            const updatedProductIndex=updatedProducts.findIndex(item=>{ 
                console.log(item.id,action.id); 
                return action.id===item.id
            });
            console.log(updatedProductIndex,action.id);
            const updatedProduct=updatedProducts[updatedProductIndex];
            console.log(updatedProduct);
            updatedProduct.isFev=true;
            updatedProducts[updatedProductIndex]=updatedProduct

            return {
                ...state,
                products:updatedProducts
            }
        default:
            return state
    }
}

export default productReducer;
