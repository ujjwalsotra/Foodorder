import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Login from './components/Layout/Login';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown,setCartIsShown]=useState(false);
  
  const showCartHandler=()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login/>}/>
    <Route path="/" element={<CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler} 
       />
        <main>
          <Meals/>
        </main>
    </CartProvider>}/>
    
       </Routes>
       </BrowserRouter>
        
  );
}

export default App;
