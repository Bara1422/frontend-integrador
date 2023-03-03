import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/img/cart-icon.svg';
import {
  CartIconStyled,
  ItemCount,
  CartIconContainer,
} from './CartIconElements';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import { useEffect, useRef } from 'react';
import './cartIcon.css';

export const CartIcon = ({ shake }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );
  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };

  useEffect(() => {
    shake
      ? ref.current.classList.add('shake')
      : ref.current.classList.remove('shake');
  }, [shake]);

  return (
    <div>
      <CartIconContainer onClick={handlerToggle} ref={ref}>
        <CartIconStyled>
          <ShoppingIcon style={{ width: '24px', height: '24px' }} />
        </CartIconStyled>
        <ItemCount>{quantity}</ItemCount>
      </CartIconContainer>
    </div>
  );
};
