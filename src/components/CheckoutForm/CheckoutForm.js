import { FormSectionStyled } from "./CheckoutFormElements";
import useForm from '../../hooks/useForm';
import { FormStyled, Input, Spinner } from '../UI';
import { CardSummary } from '../CardSummary/CardSummary';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as orderActions from '../../redux/orders/order-actions';
import * as cartActions from '../../redux/cart/cart-actions';

export const CheckoutForm = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const { cartItems } = useSelector(state => state.cart);
  const { purchased, loading } = useSelector(state => state.orders);
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let COSTOENVIO = 250;

  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: '',
        isValid: false,
      },
      localidad: {
        value: '',
        isValid: false,
      },
    },
    false
  );


  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!formState.isValid || subTotal === 0) {
      console.log('Completar todos los datos');
      return;
    }
    const orderData = {
      userId: currentUser.uid,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value,
      },
      items: [...cartItems],
      shippingPrice: COSTOENVIO,
      subTotal: subTotal,
      total: COSTOENVIO + subTotal,
      status: 'Pendiente',
    };

    dispatch(orderActions.createOrder(orderData));
    dispatch(cartActions.clearCart());
    COSTOENVIO = 0;
    console.log(COSTOENVIO);

  };
  if (purchased) {
    dispatch(orderActions.purchaseInit());
    navigate('/mis-ordenes');
  }

  return (
    <FormStyled onSubmit={handlerSubmit}>
      <FormSectionStyled>
        <Input
          id='domicilio'
          label='Domicilio'
          type='text'
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Campo Obligatorio'
        />
        <Input
          id='localidad'
          label='Localidad'
          type='text'
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText='Campo Obligatorio'
        />
      </FormSectionStyled>

      <CardSummary isValid={!formState.isValid || subTotal === 0} subTotal={subTotal} envio={COSTOENVIO} handlerSubmit={handlerSubmit} />
      {
        loading && <Spinner />}
    </FormStyled>

  );
};