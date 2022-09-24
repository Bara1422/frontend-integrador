import React from 'react'
import { FooterContainerStyled, FooterLogoStyled, FooterMenuStyled, CopyrightStyled } from './FooterElements'
import FooterMenu from './FooterMenu'


const Footer = () => {
  return (
    <FooterContainerStyled>
      <CopyrightStyled>
        <h6><strong>Copyright 2022 © Todo-Gaming Argentina</strong></h6>
      </CopyrightStyled>
      <FooterMenu />
    </FooterContainerStyled>
  )
}

export default Footer