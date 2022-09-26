import React from 'react'
import { FooterContainerStyled, FooterLogoStyled, FooterMenuStyled, CopyrightStyled } from './FooterElements'
import FooterMenu from './FooterMenu'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';



const Footer = () => {
  return (
    <FooterContainerStyled>
      <CopyrightStyled>
        <div>
          <a href="https://www.instagram.com"> <InstagramIcon /> </a>
          <a href="https://www.twitter.com"> <TwitterIcon /> </a>
        </div>
        <h6><strong>Copyright 2022 © Todo-Gaming Argentina</strong></h6>
      </CopyrightStyled>
      <FooterMenu />
    </FooterContainerStyled >
  )
}

export default Footer