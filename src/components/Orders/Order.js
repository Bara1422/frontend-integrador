import React from 'react'
import { formatPrice } from '../../utils/formatPrice'
import { OrderContent, OrderStyled, OrderContainer, OrderItem, ItemImg } from './OrderElements'
import { DialogFooter, ConfirmButton } from '../ComponentDialog/ComponentDialogElements'
import { useSelector, useDispatch } from 'react-redux'
import { QuantityManage } from './QuantityManage'
import * as cartActions from '../../redux/cart/cart-actions'


export const Order = () => {
  const hidden = useSelector(state => state.cart.hidden);
  const cartItems = useSelector(state => state.cart.cartItems);


  return (
    <OrderStyled show={hidden}>
      {cartItems?.lenght === 0 ? (
        <OrderContent>Nada en el carrito</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Tu pedido:</OrderContainer>
          {cartItems.map(item => (
            <OrderContainer>
              <OrderItem>
                <ItemImg img={item.img} />
                <div>
                  <div>{item.name}</div>
                  {formatPrice(item.price)}
                </div>
                <QuantityManage item={item} />
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Ir a pagar</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  )
}
