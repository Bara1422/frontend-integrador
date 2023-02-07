import React, { useEffect } from 'react';
import { Banner } from '../components/Banner/Banner';
import { Navbar } from '../components/Navbar/Navbar';
import { NavbarLinks } from '../components/NavbarLinks/NavbarLinks';
import { AboutAs } from '../components/AboutAs/AboutAs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { useAuth } from '../context/AuthContext';
import { authData } from '../utils/authData';

const Home = () => {
  const { currentUser, isAuthenticated, authCheckState } = useAuth();
  console.log(currentUser);
  console.log(authData);
  console.log(isAuthenticated);

  useEffect(() => {
    console.log(currentUser);
    authCheckState();
    console.log(authData);
    console.log(isAuthenticated);
  }, [isAuthenticated]);
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
  );
};

export default Home;