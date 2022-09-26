import React from 'react';
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Order } from './components/Orders/Order';
import { Products } from './pages/Products';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Order />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>

  );
};

export default App;
