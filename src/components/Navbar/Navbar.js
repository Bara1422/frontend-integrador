import React from 'react'
import { NavbarStyled, Logo, LinkStyled, NavigationMenu } from './NavbarElements'
import img_Logo from '../../assets/img/Computer_n_screen.svg.png'
import { Link } from 'react-router-dom'
import { CartIcon } from '../Cart/CartIcon'

export const Navbar = () => {
  return (

    <NavbarStyled>
      <LinkStyled to='/'>
        <Logo src={img_Logo} />
        <h2>Todo-Gaming</h2>
      </LinkStyled>
      <NavigationMenu>
        <CartIcon />
      </NavigationMenu>
    </NavbarStyled>
  );
};
