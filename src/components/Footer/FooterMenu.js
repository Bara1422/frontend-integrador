import React from 'react';
import { LinkStyled } from '../Navbar/NavbarElements';
import { FooterMenuStyled } from './FooterElements';
import { Link as LinkScroll } from 'react-scroll';

const FooterMenu = () => {
  return (
    <FooterMenuStyled>
      <h4>Menú</h4>
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
          <LinkStyled to='/products'>Productos</LinkStyled>
        </li>
        <li>
          <LinkScroll
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            style={{ cursor: 'pointer' }}
          >Contacto</LinkScroll>
        </li>
      </ul>
    </FooterMenuStyled>
  );
};

export default FooterMenu;