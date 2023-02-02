import { useState } from "react";
import useForm from "../hooks/useForm";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../utils/validators';
import { Wrapper, LayoutPage, FormStyled, FormContent, CustomButton } from '../components/UI';
import { Containerbuttons, ALink } from "./LoginElements";
import { Input, Spinner } from '@chakra-ui/react';


import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";




const Login = () => {
  // const currentUser = useSelector((state) => state.user.currentUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { loading, login, currentUser, signin } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);



  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );


  console.log(currentUser);

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          email: {
            value: '',
            isValid: false,
          },
          password: {
            value: '',
            isValid: false,
          },
        },
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  if (currentUser) {
    navigate(-1);
  }
  return (
    <LayoutPage>
      <Wrapper>
        <form id='form'>
          <FormStyled>
            <FormContent>
              {!isLoginMode && (
                <>
                  <label style={{ display: "inline-block", margin: '10px 0px 5px', fontWeight: 500 }} htmlFor='nombre'>Nombre:</label>
                  <Input
                    id='nombre'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText='Campo Obligatorio'
                    placeholder='Ingrese su nombre'
                  />
                </>
              )
              }
              <label style={{ display: "inline-block", margin: '10px 0px 5px', fontWeight: 500 }} htmlFor='email'>Email:</label>
              <Input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                validators={[VALIDATOR_EMAIL()]}
                errorText='Ingrese un Email válido'
                placeholder='Ingrese su email'
              />
              <label style={{ display: "inline-block", margin: '10px 0px 5px', fontWeight: 500 }} htmlFor='password'>Password:</label>
              <Input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText='Campo Obligatorio'
                placeholder='Ingrese su password'
              />
            </FormContent>

            <Containerbuttons>
              {isLoginMode
                ? (<CustomButton onClick={(e) => [e.preventDefault(), login(email, password)]}> {loading ? <Spinner /> : 'Ingresar'}</CustomButton>)
                : (<CustomButton onClick={(e) => [e.preventDefault(), signin(name, email, password)]}>{loading ? <Spinner /> : 'Registrarse'}</CustomButton>)
              }
            </Containerbuttons>
            <Containerbuttons>
              <span>
                {!isLoginMode ? 'Ya tenes cuenta?' : 'Todavia no tenes cuenta?'}
              </span>
              <ALink onClick={switchModeHandler}>{!isLoginMode ? 'Ingresar' : 'Registrate'}</ALink>
            </Containerbuttons>
          </FormStyled>
        </form>
      </Wrapper>
    </LayoutPage >
  );
};

export default Login;