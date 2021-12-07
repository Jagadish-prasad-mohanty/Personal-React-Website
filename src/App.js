import React,{useState} from 'react';
import { Route,Routes} from 'react-router-dom';
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

function App() {
  const [modalActive,setModalActive]=useState(false);
  const [status,setStatus]=useState('');
  const [message,setMessage]=useState('')
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
        <Route path="/auth" element={<AuthPage show={showModal}/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        
        <Route path="/products" element={<ProductPage/>}/>
    </Routes>
      
    </Layout>
    </>
  );
}

export default App;
