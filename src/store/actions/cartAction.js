export const ADD_TO_CART="ADD_TO_CART";
export const REMOVE_FROM_CART="REMOVE_FROM_CART";
export const INCR_THE_CART="INCR_THE_CART";


export const addFevorite= (productData)=>{
    return {type:ADD_TO_CART,productData:productData}
}
export const removeFevorite= (id)=>{
    return {type:REMOVE_FROM_CART,productData:{id:id}}
}
export const incrFevorite= (productData)=>{
    return {type:INCR_THE_CART,productData:productData}
}