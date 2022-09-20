import React from 'react'
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Order } from './components/Orders/Order'
import { Products } from './pages/Products'
import Home from './pages/Home'
import { useOpenComponents } from './hooks/useOpenComponents'

function App() {
  const opendComponents = useOpenComponents()
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Order />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products opendComponents={opendComponents} />}>Productos</Route>
      </Routes>
    </Router>

  );
}

export default App;
