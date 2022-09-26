import { CustomButton } from '../UI'
import { CardContainer, CardSummaryContent, LiCard, RowCard, TotalCard, UlCard } from './CardSummaryElements'
import { formatPrice } from '../../utils/formatPrice'
import { useSelector } from 'react-redux'
import { COSTO_ENVIO } from '../../utils/ShippingCost'

export const CardSummary = ({ isValid }) => {
  const totalItems = useSelector(state => state.cart.cartItems.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0))

  return (
    <CardContainer>
      <CardSummaryContent>
        <UlCard>
          <LiCard>
            <p>Costo de productos</p>
            <span>{formatPrice(totalItems)}</span>
          </LiCard>
          <LiCard>
            <p>Costo de envío</p>
            <span>{formatPrice(COSTO_ENVIO)}</span>
          </LiCard>
          <RowCard />
          <TotalCard>
            <h4>Total</h4>
            <h4>{formatPrice(totalItems + COSTO_ENVIO)}</h4>
          </TotalCard>
        </UlCard>
        <CustomButton w='100%' m='0px' disabled={isValid}>
          Pagar
        </CustomButton>
      </CardSummaryContent>
    </CardContainer>
  )
}