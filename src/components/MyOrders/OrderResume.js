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
} from './OrderResumeElements';
import { useGetOrdersByOrderId, useOrdersById } from '../../hooks/useCategories';
import { Spinner } from '@chakra-ui/react';
import { useProducts } from '../../hooks/useProducts';


export const OrderResume = () => {
  let { orderId } = useParams();
  const { data: ordersId } = useOrdersById();
  const { data: orders, isLoading } = useGetOrdersByOrderId(orderId);
  const { data: products } = useProducts();

  const hola = async () => {
    if (products && orders) {
      await orders.map(order => {
        const product = products.find(product => product.id === order.productsId);
        if (product) {
          order.title = product.name;
          order.imgUrl = product.imgUrl;
        }
        return orders;
      });
    }
  };
  hola();
  if (!ordersId) {
    return <p>Espere</p>;
  }

  const filteredOrders = ordersId.filter(order => order.id === Number(orderId))[0];
  console.log(filteredOrders);
  if (!filteredOrders) {
    return <p>espere</p>;
  }
  return (
    <Container>
      {isLoading ?
        <>
          <p>Estamos trayendo la orden de la base datos, aguarde....</p>
          <Spinner />
        </>
        : <OrderHistory>
          <HeaderResume>
            <VolverButtonStyled to='/mis-ordenes'>
              <CustomButton w='70px'>Volver</CustomButton>
            </VolverButtonStyled>
            <TitleContainerStyled>
              <h3>Resumen</h3>
            </TitleContainerStyled>
          </HeaderResume>

          <ProductResume>
            <h3>Productos</h3>
            <ProductUl>
              {orders.map(item => (
                <ProductLi key={uuidv4()}>
                  <ItemImg img={item.imgUrl} />
                  <InfoProducts>
                    <p>{item.title}</p>
                  </InfoProducts>
                  <PriceResume>
                    <Quantity>x{item.quantity}</Quantity>
                    <strong>{formatPrice(item.unitPrice)}</strong>
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
                <span>{formatPrice(filteredOrders.subtotal)}</span>
              </CostLi>
              <CostLi>
                <span>Costo de envío</span>
                <span>{formatPrice(filteredOrders.shippingPrice)}</span>
              </CostLi>
              <CostLi>
                <strong>Total</strong>
                <strong>{formatPrice(filteredOrders.total)}</strong>
              </CostLi>
            </ProductUl>
          </CostResume>
        </OrderHistory>}
    </Container>
  );
};