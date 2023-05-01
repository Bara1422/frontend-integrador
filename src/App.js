import React, { useEffect } from 'react';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Order } from './components/Orders/Order';
import { Products } from './pages/Products';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Resume from './pages/Resume';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';
import { authData } from './utils/authData';

function App() {
  const { authCheckState, currentUser } = useAuth();


  useEffect(() => {
    authCheckState();
  }, [authCheckState]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Order />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/checkout"
          element={
            currentUser || authData ? <Checkout /> : <Navigate to="/login" />
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/mis-ordenes"
          element={
            currentUser || authData ? <Orders /> : <Navigate to="/login" />
          }
        ></Route>
        <Route
          path={`/mis-ordenes/:orderId/order-items`}
          element={
            currentUser || authData ? <Resume /> : <Navigate to="/login" />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
