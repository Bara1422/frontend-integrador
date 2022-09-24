import React from 'react'
import { NavbarStyled, Logo, LinkStyled, NavigationMenu } from './NavbarElements'
import img_Logo from '../../assets/img/Computer_n_screen.svg.png'
import { CartIcon } from '../Cart/CartIcon'
import { useDispatch } from 'react-redux'
import * as cartActions from '../../redux/cart/cart-actions'

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
      </NavigationMenu>
    </NavbarStyled>
  );
};
