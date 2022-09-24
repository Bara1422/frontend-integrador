import React from 'react'
import { LinkStyled } from '../Navbar/NavbarElements'
import { FooterMenuStyled } from './FooterElements'

const FooterMenu = () => {
  return (
    <FooterMenuStyled>
      <h4>Menú</h4>
      <ul>
        <li>
          <LinkStyled to='nosotros'>Nosotros</LinkStyled>
          {/* <a href="#nosotros">Nosotros</a> */}
        </li>
        <li>
          <LinkStyled to='/products'>Productos</LinkStyled>
          {/*   <a href="/src/products.html">Productos</a> */}
        </li>
        <li>
          <LinkStyled to='contacto'>Contacto</LinkStyled>
          {/* <a href="#contacto">Contacto</a> */}
        </li>
      </ul>
    </FooterMenuStyled>
  )
}

export default FooterMenu