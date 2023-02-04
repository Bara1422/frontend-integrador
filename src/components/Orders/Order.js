import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { OrderContent, OrderStyled, OrderContainer, OrderItem, ItemImg, ClearCartButton } from './OrderElements';
import { DialogFooter, ConfirmButton, DialogShadow } from '../ComponentDialog/ComponentDialogElements';
import { useSelector, useDispatch } from 'react-redux';
import { QuantityManage } from './QuantityManage';
import * as cartActions from '../../redux/cart/cart-actions';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Spinner } from '@chakra-ui/react';


export const Order = () => {
  const {  loading} = useAuth();
  const hidden = useSelector(state => state.cart.hidden);
  const cartItems = useSelector(state => state.cart.cartItems);
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const stringData = localStorage.getItem('authData');
  const authData = JSON.parse(stringData);
  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
    dispatch(cartActions.toggleCartHidden());
    navigate('/products');
  };

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
    if (authData !== null) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      {hidden && <DialogShadow onClick={handleToggle} />}
      <OrderStyled show={hidden}>

        <OrderContent>
          <OrderContainer>
            Tu pedido:
            {
              cartItems?.length === 0 ? (
                <ClearCartButton disabled={'disabled'}>Vaciar carrito</ClearCartButton>
              ) : (<ClearCartButton onClick={handleClearCart}>Vaciar carrito</ClearCartButton>)
            }
          </OrderContainer>
          {
            cartItems.map(item => (
              <OrderContainer key={item.id} >
                <OrderItem>
                  <ItemImg img={item.imgUrl} />
                  <div>
                    <div>{item.name}</div>
                    <p>{formatPrice(item.price * item.quantity)}</p>
                  </div>
                  <QuantityManage item={item} />
                </OrderItem>
              </OrderContainer>
            ))
          }
        </OrderContent>

        <DialogFooter>
          <Link to={authData ? '/checkout' : '/login'} onClick={handleToggle}>
            {
              cartItems?.length !== 0 && <ConfirmButton >{loading ? <Spinner /> : 'Ir a pagar'}  {formatPrice(total)}</ConfirmButton>
            }
          </Link>



        </DialogFooter>
      </OrderStyled>
    </>
  );
};
