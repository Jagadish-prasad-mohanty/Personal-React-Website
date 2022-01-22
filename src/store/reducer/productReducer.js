import {INIT_PRODUCTS,TOGGLE_LOADING} from '../actions/productAction';

const initialState={
    products:[],
    isLoading:false
}

const productReducer= (state=initialState,action)=>{
    switch (action.type){
        case INIT_PRODUCTS:
            return {
                ...state,
                products:action.products
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading:action.toggleBool
            }

        default:
            return state
    }
}

export default productReducer;