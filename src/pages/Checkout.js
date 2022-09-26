import React from 'react'
import {
  CheckoutContainerStyled,
  CheckoutIllustration,
  CheckoutImage,
  CheckoutGridContainer,
} from './CheckoutElements';
import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { Wrapper, LayoutPage } from '../components/UI';


const Checkout = () => {
  return (
    <LayoutPage>
      <Wrapper>
        <CheckoutForm></CheckoutForm>
      </Wrapper>
    </LayoutPage>
  );
}

export default Checkout