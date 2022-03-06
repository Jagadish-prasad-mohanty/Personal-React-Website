
export const ADD_ORDER="ADD_ORDER";
export const INIT_ORDER="INIT_ORDER";
export const TOGGLE_LOADING="TOGGLE_LOADING";

export const addOrder= (orderItems,totalAmount)=>{
    return {type:ADD_ORDER,orderItemsDetails:{items:orderItems,totalAmount}}
}
export const initOrder= (orders)=>{
    return {type:INIT_ORDER,orders:orders}
}
export const toggleLoading= (toggleBool)=>{
    return {type:TOGGLE_LOADING,toggleBool};
}

export const fetchOrder= ()=>{
    let currentUser= localStorage.getItem('user');
    if (currentUser){
        currentUser= localStorage.getItem('user').split(".")[0]
    }
    return async (dispatch)=>{
        dispatch(toggleLoading(true))
        fetch(`https://reactpersonalproject-default-rtdb.firebaseio.com/orders/${currentUser}.json`)
        .then(res=>{
            dispatch(toggleLoading(false))
            if(!res.ok){
                throw new Error("Unable to fetch Order Data!!")
            }
            return res.json();
        })
        .then(data=>{
            console.log("orders -> 20",data);
            dispatch(initOrder(data))
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

                        