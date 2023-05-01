import { Spinner } from '@chakra-ui/react';

import { useEffect } from 'react';
import { MyOrders } from '../components/MyOrders/MyOrders';
import { LayoutPage, Wrapper } from '../components/UI';
import { useAuth } from '../context/AuthContext';
import { useOrdersById } from '../hooks/useCategories';
import { useNavigate } from 'react-router-dom';
import { authData } from '../utils/authData';
import OrdersBackground from '../assets/img/pc-escritorio.jpg';

const Orders = () => {
  const { currentUser } = useAuth();
  const { data: ordersId, isLoading } = useOrdersById();
  console.log(currentUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser && !authData) {
      navigate('/login');
    }
  }, [navigate, currentUser]);

  return (
    <LayoutPage img={OrdersBackground}>
      <Wrapper>
        {isLoading ? <Spinner /> : <MyOrders orders={ordersId} />}
      </Wrapper>
    </LayoutPage>
  );
};

export default Orders;
