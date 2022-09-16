import React from 'react'
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Navbar } from './components/Navbar/Navbar'
import { Banner } from './components/Banner/Banner'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Products } from './pages/Products'
import Home from './pages/Home'
import { useOpenComponents } from './hooks/useOpenComponents'

function App() {
  const openComponents = useOpenComponents()
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products openComponents={openComponents} />}>Productos</Route>
      </Routes>
    </Router>

  );
}

export default App;
