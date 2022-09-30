import React from 'react'
import {
  CheckoutContainerStyled,
  CheckoutIllustration,
  CheckoutImage,
  CheckoutGridContainer,
} from './CheckoutElements';
import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { Wrapper, LayoutPage } from '../components/UI';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const navigate = useNavigate()

  if (!currentUser) {
    return navigate('/login')
  }
  return (
    <LayoutPage>
      <Wrapper>
        <CheckoutForm></CheckoutForm>
      </Wrapper>
    </LayoutPage>
  );
}

export default Checkout