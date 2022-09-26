import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from './NavbarLinksElements'
import { Link as LinkScroll } from 'react-scroll'


export const NavbarLinks = () => {
  return (
    <div>
      <NavbarStyled>
        <ul>
          <li>
            <LinkScroll
              activeClass="active"
              to="about"
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
            <LinkScroll
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: 'pointer' }}
            >Contacto</LinkScroll>
          </li>
        </ul>

      </NavbarStyled>
    </div >
  )
}
