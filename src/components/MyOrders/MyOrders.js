import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { CustomButton } from '../UI';
import { v4 as uuidv4 } from 'uuid';
import {
  Container,
  OrderHistory,
  Wrapper,
  OrderTitle,
  OrderContent,
  OrderDetails,
  OrderUl,
  OrderLi,
  OrderSpan,
  Flex,
  Status,
  StatusContainerStyled,
} from './MyOrdersElements';

import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { authData } from '../../utils/authData';

export const MyOrders = ({ orders }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authData && !currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return (
    <Container>
      <OrderHistory>
        <Wrapper>
          <OrderTitle>
            <h2>Mis últimos pedidos</h2>
            <p>Haz seguimiento de tus pedidos anteriores</p>
          </OrderTitle>
          <div>
            {orders.map((order) => (
              <OrderContent key={uuidv4()}>
                <OrderDetails>
                  <OrderUl>
                    <OrderLi>
                      <OrderSpan>Fecha:</OrderSpan>
                      {order.createdAt}
                    </OrderLi>
                    <OrderLi>
                      <OrderSpan>Total:</OrderSpan>
                      {formatPrice(order.total)}
                    </OrderLi>
                  </OrderUl>
                  <StatusContainerStyled>
                    <Status type={order.statusId}>'pending'</Status>
                  </StatusContainerStyled>
                  <Flex>
                    <Link to={`${order.id}/order-items`}>
                      <CustomButton w="150px" m="0">
                        Ver resumen
                      </CustomButton>
                    </Link>
                  </Flex>
                </OrderDetails>
              </OrderContent>
            ))}
          </div>
        </Wrapper>
      </OrderHistory>
    </Container>
  );
};
