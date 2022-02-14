import { ADD_ORDER } from "../actions/orderAction";
const initialOrderState={
    orders:[],
    orderLength:0
}


const orderReducer =(state=initialOrderState,action)=>{
    switch (action.type){
        case ADD_ORDER:
            const {items,totalAmount} =action.orderItemsDetails
            const updatedOrder=[...state.orders];
            updatedOrder.push({orderItems:items,totalAmount});

            return {
                ...state,
                orders:updatedOrder,
                orderLength:state.orderLength+1
            }
        default:
            return state;
    }
}


export default orderReducer;