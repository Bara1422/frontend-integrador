import React, { useEffect } from 'react';
import { Banner } from '../components/Banner/Banner';
import { Navbar } from '../components/Navbar/Navbar';
import { NavbarLinks } from '../components/NavbarLinks/NavbarLinks';
import { AboutAs } from '../components/AboutAs/AboutAs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, authCheckState } = useAuth();

  useEffect(() => {
    authCheckState();
  }, [isAuthenticated, authCheckState]);

  return (
    <>
      <Navbar />
      <Banner>
        <h2>LOS MEJORES COMPONENTES</h2>
        <p>AL MEJOR PRECIO</p>
      </Banner>
      <NavbarLinks />
      <AboutAs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;