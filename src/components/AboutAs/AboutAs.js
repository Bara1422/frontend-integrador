import React from 'react'
import { LinkAsStyled, AboutAsStyled } from './AboutAsElements'

export const AboutAs = () => {
  return (
    <AboutAsStyled id='about'>
      <h1>Todo-Gaming</h1>
      <p>Los mejores componentes para tu PC, los mejores precios del MERCADO y la mejor atención los encontras <LinkAsStyled to='/products'>ACÁ</LinkAsStyled>. Contamos con la mejor y más variada cantidad de productos con garantía total para que no te preocupes despues de realizada la compra, tambien contamos con envios a todo el país con entrega prioritaria para que no tengas que esperar más de lo deseado tu producto. </p>
    </AboutAsStyled>
  )
}
