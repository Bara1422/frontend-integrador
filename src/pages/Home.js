import { Banner } from '../components/Banner/Banner';
import { Navbar } from '../components/Navbar/Navbar';
import { NavbarLinks } from '../components/NavbarLinks/NavbarLinks';
import { AboutAs } from '../components/AboutAs/AboutAs';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
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
