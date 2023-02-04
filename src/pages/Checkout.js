import React from 'react';
import { useNavigate } from 'react-router-dom';

import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { Wrapper, LayoutPage } from '../components/UI';


import { useAuth } from '../context/AuthContext';


const Checkout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  if (currentUser) {
    return (
      <LayoutPage>
        <Wrapper>
          <CheckoutForm></CheckoutForm>
        </Wrapper>
      </LayoutPage>
    );
  } else {
    navigate('/login');
  }
};

export default Checkout;