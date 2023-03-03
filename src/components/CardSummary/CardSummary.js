import { CustomButton } from '../UI';
import {
  CardContainer,
  CardSummaryContent,
  LiCard,
  RowCard,
  TotalCard,
  UlCard,
} from './CardSummaryElements';
import { formatPrice } from '../../utils/formatPrice';

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
            {subTotal !== 0 ? (
              <span>{formatPrice(envio)}</span>
            ) : (
              <span>{formatPrice((envio = 0))}</span>
            )}
          </LiCard>
          <RowCard />
          <TotalCard>
            <h4>Total</h4>
            <h4>{formatPrice(subTotal + envio)}</h4>
          </TotalCard>
        </UlCard>

        <CustomButton
          onClick={handlerSubmit}
          w="100%"
          m="0px"
          disabled={isValid}
        >
          Pagar
        </CustomButton>
      </CardSummaryContent>
    </CardContainer>
  );
};
