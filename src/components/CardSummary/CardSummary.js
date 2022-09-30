import { CustomButton } from '../UI'
import { CardContainer, CardSummaryContent, LiCard, RowCard, TotalCard, UlCard } from './CardSummaryElements'
import { formatPrice } from '../../utils/formatPrice'
import { useSelector, useDispatch } from 'react-redux'
import { COSTO_ENVIO } from '../../utils/ShippingCost'
import { style } from '@mui/system'

export const CardSummary = ({ isValid, envio, subTotal, handlerSubmit }) => {

  return (
    <CardContainer>
      <CardSummaryContent>
        <UlCard>
          <LiCard>
            <p>Costo de productos</p>
            <span>{formatPrice(subTotal)}</span>
          </LiCard>
          <LiCard>
            <p>Costo de envío</p>
            <span>{formatPrice(envio)}</span>
          </LiCard>
          <RowCard />
          <TotalCard>
            <h4>Total</h4>
            <h4>{formatPrice(subTotal + envio)}</h4>
          </TotalCard>
        </UlCard>

        <CustomButton onClick={handlerSubmit} w='100%' m='0px' disabled={isValid} >
          Pagar
        </CustomButton>
      </CardSummaryContent>
    </CardContainer>
  )
}