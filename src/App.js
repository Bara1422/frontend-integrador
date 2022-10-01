import React, { useEffect } from 'react';
import './App.css';
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
import { useSelector, useDispatch } from 'react-redux';
import { auth } from './firebase/firebase.utils2';
import * as userActions from './redux/user/user-actions';
import { onAuthStateChanged } from "firebase/auth";



function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        dispatch(userActions.setCurrentUser(currentUser));
      } else {
        dispatch(userActions.setCurrentUser(null));
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Order />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/checkout' element={currentUser ? <Checkout /> : <Navigate to='/login' />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/mis-ordenes' element={currentUser ? <Orders /> : <Navigate to='/login' />}></Route>
        <Route path={`/mis-ordenes/:orderId`} element={currentUser ? <Resume /> : <Navigate to='/login' />}></Route>
      </Routes>
    </Router>

  );
};

export default App;
