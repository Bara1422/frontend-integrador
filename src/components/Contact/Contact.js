import React, { useEffect } from 'react';
import {
  FormContainerStyled,
  FormStyled,
  FormTitleStyled,
  InputStyled,
  TextAreaStyled,
  SubmitStyled,
} from './ContactElements';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      mensaje: '',
    },
  });

  const customSubmit = (data, e) => {
    alert(`${data.nombre}, nos contactaremos a la brevedad.`);
    reset();
  };
  const onError = (errors, e) => {
    console.log(errors, e);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <FormContainerStyled>
      <FormStyled
        onSubmit={handleSubmit(customSubmit, onError)}
        data-aos="fade-up"
      >
        <FormTitleStyled id="contact">Contactanos</FormTitleStyled>
        <InputStyled
          placeholder="Nombre"
          type="text"
          {...register('nombre', { required: true, maxLength: 30 })}
        />
        {errors.nombre?.type === 'required' && (
          <small
            style={{ color: 'red', paddingBottom: '10px', paddingLeft: '5px' }}
          >
            El campo no puede estar vacio
          </small>
        )}
        {errors.nombre?.type === 'maxLength' && (
          <small
            style={{ color: 'red', paddingBottom: '10px', paddingLeft: '5px' }}
          >
            El campo no puede tener mas de 30 caracteres
          </small>
        )}
        <InputStyled
          placeholder="Email"
          {...register('email', {
            required: 'El email es requerido',
            pattern: /^\S+@\S+\.\S+$/,
          })}
        />
        {errors.email?.type === 'required' && (
          <small
            style={{ color: 'red', paddingBottom: '10px', paddingLeft: '5px' }}
          >
            {errors.email?.message}
          </small>
        )}
        {errors.email?.type === 'pattern' && (
          <small
            style={{ color: 'red', paddingBottom: '10px', paddingLeft: '5px' }}
          >
            Ingrese un Email valido
          </small>
        )}
        <TextAreaStyled
          placeholder="Escribe tu mensaje..."
          cols="20"
          rows="5"
          {...register('mensaje', { required: true, maxLength: 200 })}
        />
        {errors.mensaje?.type === 'required' && (
          <small
            style={{ color: 'red', paddingBottom: '10px', paddingLeft: '5px' }}
          >
            El campo no puede estar vacio
          </small>
        )}
        {errors.mensaje?.type === 'maxLength' && (
          <small
            style={{ color: 'red', paddingBottom: '10px', paddingLeft: '5px' }}
          >
            El campo no puede contener mas de 200 caracteres
          </small>
        )}
        <SubmitStyled
          type="submit"
          onClick={() => {
            const getValuess = JSON.stringify(
              getValues(['nombre', 'email', 'mensaje'])
            );
          }}
        >
          Enviar
        </SubmitStyled>
      </FormStyled>
    </FormContainerStyled>
  );
};

export default Contact;
