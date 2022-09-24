import React from 'react'
import { FormContainerStyled, FormStyled, FormTitleStyled, InputStyled, TextAreaStyled, SubmitStyled } from './ContactElements'
import { useForm } from 'react-hook-form'


const Contact = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const customSubmit = (data, e) => {
    alert(`${data.nombre}, nos contactaremos a la brevedad.`)
  }
  const onError = (errors, e) => {
    console.log(errors, e)
  }

  return (
    <FormContainerStyled>
      <FormStyled onSubmit={handleSubmit(customSubmit, onError)}>
        <FormTitleStyled id='contacto'>Contactanos</FormTitleStyled>
        <InputStyled
          placeholder='Nombre'
          type='text'
          {...register('nombre', { required: true, maxLength: 30 })}
        />
        {errors.nombre?.type === 'required' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede estar vacio</small>}
        {errors.nombre?.type === 'maxLength' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede tener mas de 30 caracteres</small>}
        <InputStyled
          placeholder='Email'
          {...register('email', { required: 'El email es requerido', pattern: /^\S+@\S+\.\S+$/ })}

        />
        {errors.email?.type === 'required' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>{errors.email?.message}</small>}
        {errors.email?.type === 'pattern' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>Ingrese un Email valido</small>}
        <TextAreaStyled
          placeholder='Escribe tu mensaje...'
          cols="20"
          rows="5"
          {...register('mensaje', { required: true, maxLength: 200 })}
        />
        {errors.mensaje?.type === 'required' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede estar vacio</small>}
        {errors.mensaje?.type === 'maxLength' && <small style={{ color: 'red', paddingBottom: "10px", paddingLeft: '5px' }}>El campo no puede contener mas de 200 caracteres</small>}
        <SubmitStyled type='submit'>Enviar</SubmitStyled>
      </FormStyled>
    </FormContainerStyled>
  )
}

export default Contact