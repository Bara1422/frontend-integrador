import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { Wrapper, LayoutPage } from '../components/UI';

import { authData } from '../utils/authData';
import { useAuth } from '../context/AuthContext';
import CheckoutImg from '../assets/img/checkoutBg.jpg';

const Checkout = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (!authData && !currentUser) {
      navigate('/login');
    }
  }, [authData, currentUser]);
  console.log(authData);
  return (
    <LayoutPage img={CheckoutImg}>
      <Wrapper>
        <CheckoutForm></CheckoutForm>
      </Wrapper>
    </LayoutPage>
  );

};

export default Checkout;