import React,{useState,useEffect} from 'react';
import { Route,Routes,Navigate} from 'react-router-dom';
// import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import classes from './App.module.css'
import AuthPage from './pages/AuthPage';
import CartPage from './pages/CartPage';
import ErrorModal from './components/UI/Error/ErrorModal';
import Profile from './components/Profile/Profile'
import {useDispatch, useSelector } from 'react-redux';
import ProductDetails from './components/Products/ProductDetails/ProductDetails';
import { initiateCart } from './store/actions/cartAction';
import CheckOutPage from './pages/CheckOutPage';
import Resturants from './components/Resturants/Resturants';
import { Redirect } from 'react-router';
import Pallet from './components/Pallet/Platter';
import Platter from './components/Pallet/Platter';
import OrdersPage from './pages/OrdersPage';
import MyOrder from './components/Orders/MyOrder';

function App() {
  const [modalActive,setModalActive]=useState(false);
  const [status,setStatus]=useState('');
  const [message,setMessage]=useState('');
  const state=useSelector(state=>state.auth);
  
  
  const showModal= (errMsg,sts) =>{
    setModalActive(true);
    console.log("[App.js]",errMsg,sts);
    setMessage(errMsg);
    setStatus(sts);
  }

  const closeModal= () =>{
    setModalActive(false)
  }
   
  return (
  <>
    <Layout className={classes.App} show={showModal}>
    {modalActive && <ErrorModal close={closeModal} status={status} msg={message}/>}
    <Routes>

        <Route path="/" element={<HomePage/>}/>
        {!state.isLoggedIn && <Route path="/auth" element={<AuthPage show={showModal}/>}/>}
        {state.isLoggedIn && <Route path="/cart" element={<CartPage/>}/>}
        <Route path="/profile" element={state.isLoggedIn?<Profile show={showModal}/>:<Navigate to="/auth"/>}/>
        {state.isLoggedIn && <Route path="/products" element={<Navigate to="/products/sort=asc"/>}/>
          
        }
        {state.isLoggedIn && <Route path="/products/:queryParams" element={<ProductPage/>}/>}
        {state.isLoggedIn && <Route path="/product-details/:id" element={<ProductDetails/>}/>}
        {state.isLoggedIn && <Route path="/check-out" element={<CheckOutPage/>}/>}
        {state.isLoggedIn && <Route path="/my-order/:orderId" element={<MyOrder/>}/>}
        {state.isLoggedIn && <Route path="/my-order" element={<OrdersPage/>}/>}

        {state.isLoggedIn && <Route path="/resturants/:id" element={<Resturants/>}/>}
        {state.isLoggedIn && <Route path="/platter/:id" element={<Platter/>}/>}
        <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
      
    </Layout>
    </>
  );
}

export default App;
