import NaanImage from '../../assets/image/naan.jpg';
import React from 'react';
import { ADD_FEVORITE } from '../actions/productAction';
const initialProductState={
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
            image:NaanImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"3",
            name:'Paneer Butter Masala',
            price:140,
            image:NaanImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"4",
            name:'Chili Mushroom',
            price:150,
            image:NaanImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"5",
            name:'Chicken Chili',
            price:120,
            image:NaanImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"6",
            name :"Mutton Kassa",
            price:250,
            image:NaanImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        },
        {
            id:"7",
            name:'Chicken Butter Masala',
            price:140,
            image:NaanImage,
            hotelName:"Rasmi Hotel",
            isFev:false
        }

    ]
}

const productReducer= (state=initialProductState,action) =>{
    switch(action.type){
        case ADD_FEVORITE:
            const updatedProducts=[...state.products];
            console.log(updatedProducts);
            const updatedProductIndex=updatedProducts.findIndex(item=>{ 
                // console.log(item.id); 
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
