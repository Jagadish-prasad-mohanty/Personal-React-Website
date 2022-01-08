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