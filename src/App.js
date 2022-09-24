import React from 'react'
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Order } from './components/Orders/Order'
import { Products } from './pages/Products'
import Checkout from './pages/Checkout';
import Home from './pages/Home'

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
      </Routes>
    </Router>

  );
}

export default App;
