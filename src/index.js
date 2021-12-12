import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import authReducer from './store/reducer/authReducer';
import productReducer from './store/reducer/productReducer';
import { combineReducers } from 'redux';
const rootReducer= combineReducers(
  {
      auth:authReducer,
      products:productReducer
  }
)
const store=createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  
    <App />
  </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

reportWebVitals();
