import { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../utils/validators';
import {
  Wrapper,
  LayoutPage,
  FormStyled,
  FormContent,
  CustomButton,
} from '../components/UI';
import { Containerbuttons, ALink } from './LoginElements';
import { Spinner } from '@chakra-ui/react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginBg from '../assets/img/loginBg1.jpeg';
import { authData } from '../utils/authData';
import { Input as InputUI } from '../components/UI';
import { toast, Toaster } from 'react-hot-toast';

const Login = () => {
  const { loading, login, signin, currentUser, error } = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (currentUser || authData) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error(error[0]?.message, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          fontWeight: '700',
        },
      });
    }
  }, [error]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (formState.inputs.email?.isValid && formState.inputs.password?.isValid) {
      login(formState.inputs.email.value, formState.inputs.password.value)
        .then(() => {
          setErrorMessage('');
        })
        .catch((errorLogin) => {
          setErrorMessage(errorLogin);
          console.log(errorMessage);
        });
    }
  };
  const handleSignin = (e) => {
    e.preventDefault();
    if (formState.inputs.email?.isValid && formState.inputs.password?.isValid) {
      signin(
        formState.inputs.nombre.value,
        formState.inputs.email.value,
        formState.inputs.password.value
      )
        .then(() => {
          setErrorMessage('');
        })
        .catch((error) => {
          setErrorMessage(error);
          console.log(error);
        });
    }
  };

  return (
    <LayoutPage img={LoginBg}>
      <Wrapper>
        {error && <Toaster position="bottom-center" />}
        <form id="form">
          <FormStyled>
            <FormContent>
              {!isLoginMode && (
                <>
                  <InputUI
                    id="nombre"
                    label="Nombre:"
                    type="text"
                    onInput={inputHandler}
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Campo Obligatorio"
                    placeholder="Ingrese su nombre"
                  />
                </>
              )}

              <InputUI
                id="email"
                label="Email:"
                type="email"
                onInput={inputHandler}
                validators={[VALIDATOR_EMAIL()]}
                errorText="Ingrese un Email válido"
                placeholder="Ingrese su email"
              />

              <InputUI
                id="password"
                label="Password:"
                type="password"
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText="Ingrese minimo 8 caracteres"
                placeholder="Ingrese su password"
              />
            </FormContent>

            <Containerbuttons>
              {isLoginMode ? (
                <CustomButton onClick={handleLogin}>
                  {loading ? <Spinner /> : 'Ingresar'}
                </CustomButton>
              ) : (
                <CustomButton onClick={handleSignin}>
                  {loading ? <Spinner /> : 'Registrarse'}
                </CustomButton>
              )}
            </Containerbuttons>

            <Containerbuttons>
              <span>
                {!isLoginMode ? 'Ya tenes cuenta?' : 'Todavia no tenes cuenta?'}
              </span>
              <ALink onClick={switchModeHandler}>
                {!isLoginMode ? 'Ingresar' : 'Registrate'}
              </ALink>
            </Containerbuttons>
          </FormStyled>
        </form>
      </Wrapper>
    </LayoutPage>
  );
};

export default Login;
