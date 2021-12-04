import React from 'react';
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Products from './components/Products/Products';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <Layout>
    <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
    </Routes>
      
    </Layout>
  );
}

export default App;
