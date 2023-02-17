import { useParams } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { CustomButton } from '../UI';
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
import { Spinner as Spiner } from '../UI';
import { useProducts } from '../../hooks/useProducts';


export const OrderResume = () => {
  let { orderId } = useParams();
  const { data: ordersId } = useOrdersById();
  const { data: orders, isLoading } = useGetOrdersByOrderId(orderId);
  const { data: products } = useProducts();

  const filterProductsById = async () => {
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
  filterProductsById();
  if (!ordersId) {
    return <Spinner />;
  }

  const filteredOrders = ordersId.filter(order => order.id === Number(orderId))[0];

  if (!filteredOrders) {
    return <Spinner />;
  }
  return (
    <Container>
      {isLoading ?
        <>
          <Spiner />
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
                <ProductLi key={item.id}>
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