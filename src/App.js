import React, { useEffect } from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Order } from './components/Orders/Order';
import { Products } from './pages/Products';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Resume from './pages/Resume';
import Login from './pages/Login';
import { AuthProvider, useAuth } from './context/AuthContext';

function App() {
  const { authCheckState } = useAuth();


  useEffect(() => {
    authCheckState();
  }, []);

  const stringData = localStorage.getItem('authData');
  const authData = JSON.parse(stringData);

  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Navbar />
        <Order />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/checkout' element={authData ? <Checkout /> : <Navigate to='/login' />}></Route>
          <Route path='/login' element={!authData ? <Login /> : <Navigate to='/' />}></Route>
          <Route path='/mis-ordenes' element={authData ? <Orders /> : <Navigate to='/login' />}></Route>
          <Route path={`/mis-ordenes/:orderId/order-items`} element={authData ? <Resume /> : <Navigate to='/login' />}></Route>
        </Routes>
      </AuthProvider>
    </Router>


  );
};

export default App;
