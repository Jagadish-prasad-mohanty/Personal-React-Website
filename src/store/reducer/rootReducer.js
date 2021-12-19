import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
const rtReducer=combineReducers(
    {
        auth:authReducer,
        cart:cartReducer
    }
)
const store=createStore(rtReducer);
function RootReducer(props) {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}

export default RootReducer
