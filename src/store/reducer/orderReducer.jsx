import { ADD_ORDER } from "../actions/orderAction";
import { INIT_ORDER } from "../actions/orderAction";
import { TOGGLE_LOADING } from "../actions/orderAction";
const initialOrderState = {
  orders: [],
  orderLength: 0,
  isLoading:false
};

const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
      case TOGGLE_LOADING:
          return {
              ...state,
              isLoading:action.toggleBool
          }
      case INIT_ORDER:
          const initialOrder={
            orders:[...action.orders],
            orderLength:action.orders.length
          }
          console.log("initialOrder -> 15 : ",initialOrder);
          return initialOrder
    case ADD_ORDER:
        const currentUser= localStorage.getItem('user').split(".")[0];
       if (!action.orderItemsDetails) {
           return state
       }
      const { items, totalAmount } = action.orderItemsDetails;
      const updatedOrder = [...state.orders];
      updatedOrder.push({ orderItems: items, totalAmount });
      fetch(
        `https://reactpersonalproject-default-rtdb.firebaseio.com/cart/${currentUser}/orders.json`,
        {
            method:'PUT',
            body:JSON.stringify(updatedOrder),
            headers:{
                'Content-Type':'application/json'
            }
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("addOrder -> 28",data);
        })
        .catch((err) => {
          console.log(err);
        });
      return {
        ...state,
        orders: updatedOrder,
        orderLength: state.orderLength + 1,
      };
    default:
      return state;
  }
};

export default orderReducer;
