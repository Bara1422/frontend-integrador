import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/img/cart-icon.svg'
import { CartIconStyled, ItemCount } from './CartIconElements'
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
      <CartIconStyled onClick={handlerToggle}>
        <ShoppingIcon
          style={{ width: '24px', height: '24px' }}
        />
        <ItemCount>{quantity}</ItemCount>
      </CartIconStyled>
    </div>
  )
}
