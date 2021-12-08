import React,{useState} from 'react';
import { Route,Routes,Redirect} from 'react-router-dom';
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
import { useSelector } from 'react-redux';

function App() {
  const [modalActive,setModalActive]=useState(false);
  const [status,setStatus]=useState('');
  const [message,setMessage]=useState('');
  const state=useSelector(state=>state);
  const showModal= (errMsg,sts) =>{
    setModalActive(true);
    console.log("[App.js]",errMsg,sts);
    setMessage(errMsg);
    setStatus(sts)
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
        {state.isLoggedIn && <Route path="/profile" element={<Profile show={showModal}/>}/>}
        {state.isLoggedIn && <Route path="/products" element={<ProductPage/>}/>}
        
    </Routes>
      
    </Layout>
    </>
  );
}

export default App;
