import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CheckoutForm } from '../components/CheckoutForm/CheckoutForm';
import { Wrapper, LayoutPage } from '../components/UI';

import { authData } from '../utils/authData';
import { useAuth } from '../context/AuthContext';


const Checkout = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (!authData && !currentUser) {
      navigate('/login');
    }
  }, [navigate, currentUser]);
  console.log(authData);
  return (
    <LayoutPage>
      <Wrapper>
        <CheckoutForm></CheckoutForm>
      </Wrapper>
    </LayoutPage>
  );

};

export default Checkout;