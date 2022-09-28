import React, { useState } from 'react'
import { NavbarStyled, Logo, LinkStyled, NavigationMenu, Divider, LoginButton } from './NavbarElements'
import img_Logo from '../../assets/img/Computer_n_screen.svg.png'
import { CartIcon } from '../Cart/CartIcon'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../../redux/cart/cart-actions'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils2'
import { signOut } from 'firebase/auth'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  console.log(currentUser)
  const dispatch = useDispatch()
  const [isLoginMode, setIsLoginMode] = useState(true)
  const handleCart = () => {
    dispatch(cartActions.cartHidden())
  }
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (

    <NavbarStyled>
      <LinkStyled to='/' onClick={handleCart}>
        <Logo src={img_Logo} />
        <h2>Todo-Gaming</h2>
      </LinkStyled>
      <NavigationMenu>
        <CartIcon />
        <Divider />
        <LinkStyled to='/login'>
          <LoginButton>Ingresar</LoginButton>
        </LinkStyled>
        <AccountCircleIcon fontSize='large' style={{ cursor: 'pointer' }} onClick={logout} />
      </NavigationMenu>
    </NavbarStyled>
  );
};
