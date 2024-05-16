import React from 'react';
import './App.css';
import Product from './components/Product/Product';
import ProductSection from './components/Product/ProductSection';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<ProductSection/>} />
        <Route path='/:id' element={<Product/>} />
      </Routes>
    </>
  );
}

export default App
