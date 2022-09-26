import { FormSectionStyled, FormTitle, InputCheckoutStyled } from "./CheckoutFormElements";
import useForm from '../../hooks/useForm'
import { FormStyled, FormContent, CustomButton, Input } from '../UI'
import { InputStyled } from "../Contact/ContactElements";
import { CardSummary } from '../CardSummary/CardSummary'
import { VALIDATOR_REQUIRE } from '../../utils/validators'

export const CheckoutForm = () => {
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
      alert('Completar todos los datos')
    }
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
      <CardSummary isValid={!formState.isValid} />
    </FormStyled>

  )
}