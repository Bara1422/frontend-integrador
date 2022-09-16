import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { Navbar } from '../components/Navbar/Navbar'
import { NavbarLinks } from '../components/NavbarLinks/NavbarLinks'
import { AboutAs } from '../components/AboutAs/AboutAs'
import { Link as LinkScroll } from 'react-scroll'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner>
        <h2>Los mejores componentes del mercado</h2>
        <p>Al mejor PRECIO</p>
      </Banner>
      <NavbarLinks />
      <AboutAs id='about' />
    </>
  )
}

export default Home;