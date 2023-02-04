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
import { useGetOrdersByOrderId, useGetProducts, useOrdersById } from '../../hooks/useCategories';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from '@chakra-ui/react';
import { useProducts } from '../../hooks/useProducts';


export const OrderResume = () => {
  let { orderId } = useParams();

  const { data: ordersId } = useOrdersById();
  const { data: orders } = useGetOrdersByOrderId(orderId);
  const { isLoading } = useQuery([orders]);
  const { data: products } = useProducts();
  console.log('ordersId', ordersId);
  console.log('getproducts', products);
  console.log(products);
  console.log('ordersbyoi', orders);
  console.log(Number(orderId));


  /*   const [orders1, setOrders1] = useState(null);
    const [products1, setProducts1] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [ordersResponse1, productsResponse1] = await Promise.all([
            axios.get(`orders/${orderId}/order-items`),
            axios.get('products')
          ]);
          setOrders1(ordersResponse1.data);
          setProducts1(productsResponse1.data.data.result);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    }, []);
    console.log(orders1);
    console.log(products1); */

  useEffect(() => {

    const hola = async () => {
      if (products && orders)
        await products.forEach(products => {
          orders.forEach(orders => {
            if (products.id === orders.productsId) {
              orders.title = products.name;
              orders.imgUrl = products.imgUrl;
            }
          });
        });
    };
    hola();
  }, [orders, products]);


  let [orderFilter] = ordersId.filter(order => (order.id === Number(orderId)));
  /*   console.log(orderFilter); */
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
                <span>{formatPrice(orderFilter.subtotal)}</span>
              </CostLi>
              <CostLi>
                <span>Costo de envío</span>
                <span>{formatPrice(orderFilter.shippingPrice)}</span>
              </CostLi>
              <CostLi>
                <strong>Total</strong>
                <strong>{formatPrice(orderFilter.total)}</strong>
              </CostLi>
            </ProductUl>
          </CostResume>
        </OrderHistory>}

    </Container>
  );
};