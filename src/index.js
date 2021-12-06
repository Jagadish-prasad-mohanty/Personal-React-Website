import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import authReducer from './store/reducer/authReducer';

const store=createStore(authReducer);
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  
    <App />
  </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

reportWebVitals();
