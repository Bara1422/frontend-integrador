import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { Navbar } from '../components/Navbar/Navbar'
import { NavbarLinks } from '../components/NavbarLinks/NavbarLinks'
import { AboutAs } from '../components/AboutAs/AboutAs'
import Contact from '../components/Contact/Contact'
import { Link as LinkScroll } from 'react-scroll'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner>
        <h2>Los mejores componentes del mercado</h2>
        <p>Al mejor PRECIO</p>
      </Banner>
      <NavbarLinks />
      <AboutAs />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;