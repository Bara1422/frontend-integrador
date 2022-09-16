import React from 'react'
import { NavbarStyled, Logo, LinkStyled } from './NavbarElements'
import img_Logo from '../../assets/img/Computer_n_screen.svg.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <NavbarStyled>
        <LinkStyled to='/'>
          <Logo src={img_Logo} />
          <h2>Todo-Gaming</h2>
        </LinkStyled>

      </NavbarStyled></div >
  );
};
