export const ADD_FEVORITE="ADD_FEVORITE";
export const INITIATE_PRODUCTS="INITIATE_PRODUCTS";

export const addFevorite= (id)=>{
    return {type:ADD_FEVORITE,id:id}
}
export const initiateProducts= (products)=>{
    return {type:INITIATE_PRODUCTS,products:products}
}