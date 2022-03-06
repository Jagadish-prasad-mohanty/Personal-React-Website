import React from 'react';
import {createStore} from 'redux';
// import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import RootReducer from './store/reducer/rootReducer';
// import { combineReducers } from 'redux';
// const rootReducer= combineReducers(
//   {
//       auth:authReducer,
//       products:productReducer
//   }
// )
// const store=createStore(rootReducer);
ReactDOM.render(
  <RootReducer>

  <BrowserRouter>
  
    <App />
  </BrowserRouter>
  </RootReducer>
 , 
  document.getElementById('root')
);

reportWebVitals();
