export const INIT_PRODUCTS="INIT_PRODUCTS";
export const TOGGLE_LOADING="TOGGLE_LOADING";

export const initProducts= (products) =>{
    return {type:INIT_PRODUCTS,products:products}
}

export const toggleLoading=(toggleBool)=>{
    return {type:TOGGLE_LOADING,toggleBool:toggleBool}
}

export const fetchProducts= () =>{
    return async (dispatch) =>{
        
        const fetchedProducts=[];
        dispatch(toggleLoading(true));
            fetch("https://reactpersonalproject-default-rtdb.firebaseio.com/Products.json").then((res)=>{
                dispatch(toggleLoading(false));
                return res.json()
            }).then((data)=>{
                for (let key in data ){
                    fetchedProducts.push({
                        id:data[key].id,
                        name:data[key].name,
                        price:data[key].price,
                        image:data[key].image,
                        hotelName:data[key].hotelName,
                        isFev:data[key].isFev,
                        description:data[key].description,
                    })
                }
                console.log("productAction -> fetchedProduct",fetchedProducts);
                dispatch(initProducts(fetchedProducts));
                
            
                // dispatch(initiateProducts(fetchedProducts))
            }).catch(err=>{
            
            });
    
}}