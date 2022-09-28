import React, { useEffect } from 'react';
import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Order } from './components/Orders/Order';
import { Products } from './pages/Products';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login'
import { useSelector, useDispatch } from 'react-redux'
import { auth, createUserProfileDocument, db } from './firebase/firebase.utils2'
import * as userActions from './redux/user/user-actions'
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from 'firebase/firestore'


function onAuthStateChange(cb, action) {
  onAuthStateChanged(auth, async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      onSnapshot((userRef), (snapShot) => {
        cb(action({ id: snapShot.id, ...snapShot }));
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {
  const currentUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChange(dispatch, userActions.setCurrentUser)
    return () => {
      unsubscribe()
    };

  }, [dispatch]);

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
