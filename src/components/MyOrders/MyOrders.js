import { collection } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { Route, Routers, Link } from 'react-router-dom'
import { formatPrice, formatDate } from '../../utils/formatPrice';
import { CustomButton } from '../UI';
import { db } from '../../firebase/firebase.utils2';
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


export const MyOrders = ({ orders }) => {
  const currentUser = useSelector(state => state.user.currentUser)

  return (
    <Container>
      <OrderHistory>
        <Wrapper>
          <OrderTitle>
            <h2>Mis últimos pedidos</h2>
            <p>
              Haz seguimiento de tus pedidos anteriores
            </p>
          </OrderTitle>
          <div>
            {console.log(currentUser)}
            {orders.map(order => (
              <OrderContent>
                <OrderDetails>
                  <OrderUl>
                    <OrderLi key={order}>
                      <OrderSpan>Fecha:</OrderSpan>
                      {formatDate(new Date(order.createdAt.seconds))}
                    </OrderLi>
                    <OrderLi>
                      <OrderSpan>Total:</OrderSpan>
                      {formatPrice(order.total)}

                    </OrderLi>
                  </OrderUl>
                  <StatusContainerStyled>
                    <Status type={order.status}>{order.status}</Status>

                  </StatusContainerStyled>
                  <Flex>
                    <Link to={`${order.id}`}>
                      <CustomButton w='150px' m='0'>
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
  )
}