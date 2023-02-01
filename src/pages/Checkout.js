import React from 'react';

import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { Wrapper, LayoutPage } from '../components/UI';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const Checkout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser);

  if (currentUser)
    return (
      <LayoutPage>
        <Wrapper>
          <CheckoutForm></CheckoutForm>
        </Wrapper>
      </LayoutPage>
    );
};

export default Checkout;