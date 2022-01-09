import axios from 'axios';
export const ADD_TO_CART="ADD_TO_CART";
export const REMOVE_FROM_CART="REMOVE_FROM_CART";
export const INCR_THE_CART="INCR_THE_CART";
export const INITIATE_CART="INITIATE_CART";


export const addFevorite= (productData)=>{
    return {type:ADD_TO_CART,productData:productData};
}
export const removeFevorite= (productData)=>{
    return {type:REMOVE_FROM_CART,productData:productData};
}
export const incrFevorite= (productData)=>{
    return {type:INCR_THE_CART,productData:productData};
}
export const initiateCart= (initialCart)=>{
    return {type:INITIATE_CART,initialCart:initialCart};
}

// export const fetchCart= () =>{
//     const currentUser= localStorage.getItem('user');
//     console.log("[cartAction.js]-> curerntUser",currentUser);
//     return (dispatch)=>{
//         axios.get(`https://reactpersonalproject-default-rtdb.firebaseio.com/cart/${currentUser}.json`
//           ).then(response=>response.json()).then(resData=>{
//             console.log("initiateCart -> CartAction.js",resData);
//             console.log("[CartAction.js -> currentUser]",currentUser);
//               dispatch(initiateCart(resData));
//           }).catch(error=>{
//             console.log(error.message);
//           });
   
//     }
// }