import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { OrderContent, OrderStyled, OrderContainer, OrderItem, ItemImg, ClearCartButton } from './OrderElements';
import { DialogFooter, ConfirmButton, DialogShadow } from '../ComponentDialog/ComponentDialogElements';
import { useSelector, useDispatch } from 'react-redux';
import { QuantityManage } from './QuantityManage';
import * as cartActions from '../../redux/cart/cart-actions';
import { Link } from 'react-router-dom';


export const Order = () => {
  const hidden = useSelector(state => state.cart.hidden);
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const handleToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  return (
    <>
      {hidden && <DialogShadow onClick={handleToggle} />}
      <OrderStyled show={hidden}>

        <OrderContent>
          <OrderContainer>
            Tu pedido:
            <ClearCartButton onClick={handleClearCart}>Vaciar carrito</ClearCartButton>
          </OrderContainer>
          {cartItems.map(item => (
            <OrderContainer key={item.id}>
              <OrderItem>
                <ItemImg img={item.img} />
                <div>
                  <div>{item.name}</div>
                  <p>{formatPrice(item.price * item.quantity)}</p>
                </div>
                <QuantityManage item={item} />
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>

        <DialogFooter>
          <Link to='/checkout' onClick={handleToggle}>
            {
              cartItems?.length === 0 ? (
                <ConfirmButton disabled={'disabled'}>Ir a pagar {formatPrice(total)}</ConfirmButton>
              ) : (
                <ConfirmButton >Ir a pagar {formatPrice(total)}</ConfirmButton>
              )
            }
          </Link>
        </DialogFooter>
      </OrderStyled>
    </>
  );
};
