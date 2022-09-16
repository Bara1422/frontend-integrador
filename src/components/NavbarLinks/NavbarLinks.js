import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from './NavbarLinksElements'
import { Link as LinkScroll, animeteScroll as scroll } from 'react-scroll'


export const NavbarLinks = () => {
  return (
    <div>
      <NavbarStyled>
        <ul>
          <li>
            <LinkScroll
              activeClass="active"
              to="#about"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >Nosotros</LinkScroll>
          </li>
          <li>
            <Link to='/products'>Productos</Link>
          </li>
          <li>
            <a href='#contacto'>Contacto</a>
          </li>
        </ul>

      </NavbarStyled>
    </div >
  )
}
