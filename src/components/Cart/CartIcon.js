import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/img/cart-icon.svg'
import { CartIconStyled, ItemCount, CartIconContainer } from './CartIconElements'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../../redux/cart/cart-actions'

export const CartIcon = () => {
  const dispatch = useDispatch()
  const quantity = useSelector(state => state.cart.cartItems.reduce((acc, cartItem) => { return acc + cartItem.quantity }, 0))
  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden())
  }

  return (
    <div>
      <CartIconContainer onClick={handlerToggle}>
        <CartIconStyled >
          <ShoppingIcon
            style={{ width: '24px', height: '24px' }}
          />
        </CartIconStyled>
        <ItemCount>{quantity}</ItemCount>
      </CartIconContainer>
    </div>
  )
}
