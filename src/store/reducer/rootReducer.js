import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore,applyMiddleware,compose } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import thunk from "redux-thunk";

const rtReducer=combineReducers(
    {
        auth:authReducer,
        cart:cartReducer,
        products:productReducer
    }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    rtReducer,
    composeEnhancers(applyMiddleware(thunk))
    );
function RootReducer(props) {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default RootReducer
