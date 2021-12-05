import React from 'react';
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

function App() {
  return (
    <Layout className={classes.App}>
    <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        
        <Route path="/products" element={<ProductPage/>}/>
    </Routes>
      
    </Layout>
  );
}

export default App;
