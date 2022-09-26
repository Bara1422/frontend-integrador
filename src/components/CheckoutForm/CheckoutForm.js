import { FormSectionStyled, FormTitle, InputCheckoutStyled } from "./CheckoutFormElements";
import { useForm } from 'react-hook-form'
import { FormStyled, FormContent } from '../UI'
import { InputStyled } from "../Contact/ContactElements";

export const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const customSubmit = (data, e) => {
    alert(`${data.nombre}, nos contactaremos a la brevedad.`)
  }
  const onError = (errors, e) => {
    console.log(errors, e)
  }
  return (
    <form>
      <FormStyled>
        <FormSectionStyled onSubmit={handleSubmit(customSubmit, onError)}>
          <label htmlFor="domicilio">Domicilio:</label>
          <InputCheckoutStyled
            id="domicilio"
            type='text'
            {...register('domicilio', { required: true, maxLength: 20 })}
          />
          {errors.domicilio?.type === 'required' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede estar vacio</small>}
          {errors.domicilio?.type === 'maxLength' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede tener mas de 20 caracteres</small>}
          <label htmlFor="localidad">Localidad:</label>
          <InputCheckoutStyled
            id="localidad"
            type='text'
            {...register('localidad', { required: true, maxLength: 20 })}
          />
          {errors.localidad?.type === 'required' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede estar vacio</small>}
          {errors.localidad?.type === 'maxLength' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede tener mas de 20 caracteres</small>}
        </FormSectionStyled>
      </FormStyled>
    </form>
  )
}