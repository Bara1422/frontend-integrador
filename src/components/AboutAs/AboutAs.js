import React, { useEffect } from 'react';
import { LinkAsStyled, AboutAsStyled } from './AboutAsElements';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutAs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <AboutAsStyled >
      <h1 data-aos='fade-up'>Todo-Gaming</h1>
      <p data-aos='fade-up'>Los mejores componentes para tu PC, los mejores precios del MERCADO y la mejor atención los encontras <LinkAsStyled to='/products'>ACÁ</LinkAsStyled>. Contamos con la mejor y más variada cantidad de productos con garantía total para que no te preocupes despues de realizada la compra, tambien contamos con envios a todo el país con entrega prioritaria para que no tengas que esperar más de lo deseado tu producto. </p>
    </AboutAsStyled>
  );
};
