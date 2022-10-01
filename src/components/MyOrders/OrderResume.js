import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { CustomButton } from '../UI';
import { v4 as uuidv4 } from 'uuid';
import {
  HeaderResume,
  ProductResume,
  ProductUl,
  ProductLi,
  ItemImg,
  InfoProducts,
  PriceResume,
  Quantity,
  CostResume,
  CostLi,
  OrderHistory,
  Container,
  TitleContainerStyled,
  VolverButtonStyled,
  StatusContainerStyled,
  Status,
} from './OrderResumeElements';

export const OrderResume = () => {
  let { orderId } = useParams();
  let { orders } = useSelector(state => state.orders);


  let [order] = orders.filter(order => (order.id === orderId));
  return (
    <Container>
      <OrderHistory>
        <HeaderResume>
          <VolverButtonStyled to='/mis-ordenes'>
            <CustomButton w='60px'>Volver</CustomButton>
          </VolverButtonStyled>
          <TitleContainerStyled>
            <h3>Resumen</h3>
            <p>Orden: {orderId}</p>
          </TitleContainerStyled>
          <StatusContainerStyled>
            <Status type={order.status}>{order.status}</Status>
          </StatusContainerStyled>
        </HeaderResume>

        <ProductResume>
          <h3>Productos</h3>
          <ProductUl>
            {order.items.map(item => (
              <ProductLi key={uuidv4()}>
                <ItemImg img={item.img} />
                <InfoProducts>
                  <p>{item.name}</p>
                </InfoProducts>
                <PriceResume>
                  <Quantity>x{item.quantity}</Quantity>
                  <strong>${item.price}</strong>
                </PriceResume>
              </ProductLi>
            ))}
          </ProductUl>
        </ProductResume>
        <CostResume>
          <h3>Costos</h3>
          <ProductUl>
            <CostLi>
              <span>Costo de los productos</span>
              <span>{formatPrice(order.subTotal)}</span>
            </CostLi>
            <CostLi>
              <span>Costo de envío</span>
              <span>{formatPrice(order.shippingPrice)}</span>
            </CostLi>
            <CostLi>
              <strong>Total</strong>
              <strong>{formatPrice(order.total)}</strong>
            </CostLi>
          </ProductUl>
        </CostResume>
      </OrderHistory>
    </Container>
  );
};