import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrderResume } from '../components/MyOrders/OrderResume';
import { useAuth } from '../context/AuthContext';
import { authData } from '../utils/authData';
import { CheckoutContainerStyled } from './CheckoutElements';
import ResumeBackground from '../assets/img/pc-escritorio.jpg';

const Resume = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser && !authData) {
      navigate('/login');
    }
  }, [navigate, currentUser]);

  return (
    <CheckoutContainerStyled img={ResumeBackground}>
      <OrderResume />
    </CheckoutContainerStyled>
  );
};

export default Resume;
