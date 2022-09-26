import useForm from "../hooks/useForm";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../utils/validators'
import { Wrapper, LayoutPage, FormStyled, FormContent, Input, CustomButton } from '../components/UI'
import { Containerbuttons, GoogleButton } from "./LoginElements";
import GoogleIcon from '@mui/icons-material/Google';


const Login = () => {
  const [formState, inputHandler] = useForm(
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
  return (
    <LayoutPage>
      <Wrapper>
        <form>
          <FormStyled>
            <FormContent>
              <Input
                id='email'
                label='Email:'
                type='email'
                onInput={inputHandler}
                validators={[VALIDATOR_EMAIL()]}
                errorText='Ingrese un Email válido'
              />
              <Input
                id='password'
                label='Password:'
                type='password'
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(8)]}
                errorText='Campo Obligatorio'
              />
            </FormContent>
            <Containerbuttons>
              <CustomButton sty>Ingresar</CustomButton>
              <GoogleButton>
                <GoogleIcon sx={{ fontSize: 15 }} />
                <p>Ingresar con Google</p>
              </GoogleButton>
            </Containerbuttons>
          </FormStyled>
        </form>
      </Wrapper>
    </LayoutPage>
  )
}

export default Login