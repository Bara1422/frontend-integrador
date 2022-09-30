import { FormSectionStyled, FormTitle, InputCheckoutStyled } from "./CheckoutFormElements";
import useForm from '../../hooks/useForm'
import { FormStyled, FormContent, CustomButton, Input, Spinner } from '../UI'
import { InputStyled } from "../Contact/ContactElements";
import { CardSummary } from '../CardSummary/CardSummary'
import { VALIDATOR_REQUIRE } from '../../utils/validators'
import { COSTO_ENVIO } from "../../utils/ShippingCost";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as orderActions from '../../redux/orders/order-actions'
import * as cartActions from '../../redux/cart/cart-actions'
import { useEffect } from "react";


export const CheckoutForm = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const { cartItems } = useSelector(state => state.cart)
  const { purchased, loading } = useSelector(state => state.orders)
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0)
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    e.preventDefault()
    if (!formState.isValid) {
      console.log('Completar todos los datos')
      return
    }
    const orderData = {
      userId: currentUser.uid,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value,
      },
      items: [...cartItems],
      shippingPrice: COSTO_ENVIO,
      subTotal: subTotal,
      total: COSTO_ENVIO + subTotal,
      status: 'pending'
    };
    console.log(orderData)
    dispatch(orderActions.createOrder(orderData));
    dispatch(cartActions.clearCart());
  }
  if (purchased) {
    dispatch(orderActions.purchaseInit())
    navigate('/mis-ordenes')
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

      <CardSummary isValid={!formState.isValid} subTotal={subTotal} envio={COSTO_ENVIO} handlerSubmit={handlerSubmit} />
      {loading && <Spinner />}
    </FormStyled>

  )
}