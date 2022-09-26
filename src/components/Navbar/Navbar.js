import React from 'react'
import { NavbarStyled, Logo, LinkStyled, NavigationMenu, Divider, LoginButton } from './NavbarElements'
import img_Logo from '../../assets/img/Computer_n_screen.svg.png'
import { CartIcon } from '../Cart/CartIcon'
import { useDispatch } from 'react-redux'
import * as cartActions from '../../redux/cart/cart-actions'
import { Link } from 'react-router-dom'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const Navbar = () => {
  const dispatch = useDispatch()

  const handleCart = () => {
    dispatch(cartActions.cartHidden())
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
        <AccountCircleIcon fontSize='large' style={{ cursor: 'pointer' }} />
      </NavigationMenu>
    </NavbarStyled>
  );
};
