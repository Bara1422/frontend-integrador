import { useState } from "react";
import useForm from "../hooks/useForm";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../utils/validators'
import { Wrapper, LayoutPage, FormStyled, FormContent, Input, CustomButton } from '../components/UI'
import { Containerbuttons, GoogleButton, ALink } from "./LoginElements";
import GoogleIcon from '@mui/icons-material/Google';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db, createUserProfileDocument } from '../firebase/firebase.utils2'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { addDoc, setDoc, doc, collection, getDoc } from "firebase/firestore";
import { set } from "react-hook-form";
import * as userActions from '../redux/user/user-actions'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();
  const currentUser = useSelector(state => state.user.currentUser)
  const [isLoginMode, setIsLoginMode] = useState(true)
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

  if (currentUser) {
    navigate(-1)
  }

  const signInWithGoogle = async (e) => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const docRef = setDoc(doc(db, 'users', user.uid), {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        })
        console.log(user)
        dispatch(userActions.setCurrentUser(user))
      }).catch((error) => {
        console.log(error)
      })

  }

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
    setIsLoginMode((prevMode) => !prevMode)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      signInWithEmailAndPassword(auth, formState.inputs.email.value, formState.inputs.password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          getDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
          })
          dispatch(userActions.setCurrentUser(user))
          console.log(user)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      createUserWithEmailAndPassword(auth, formState.inputs.email.value, formState.inputs.password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const dpName = formState.inputs.nombre.value
          setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            displayName: dpName,
            email: user.email,
          })
          updateProfile(auth.currentUser, {
            displayName: dpName
          })
          dispatch(userActions.setCurrentUser(user))
          console.log(user)
          console.log(dpName)

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
  /*  const submitHandler = async (event) => {
     event.preventDefault();
     if (isLoginMode) {
       try {
         await signInWithEmailAndPassword(auth,
           formState.inputs.email.value,
           formState.inputs.password.value
         );
       } catch (error) {
         console.log(error);
       }
     } else {
       try {
         const { user } = await createUserWithEmailAndPassword(auth,
           formState.inputs.email.value,
           formState.inputs.password.value
         );
         console.log(user)
         await createUserProfileDocument(user, {
           displayName: formState.inputs.displayName.value,
         })
 
       } catch (error) {
         console.log(error);
       }
     }
   }; */
  const userA = auth.currentUser;
  console.log(userA)
  return (
    <LayoutPage>
      <Wrapper>
        <form onSubmit={submitHandler}>
          <FormStyled>
            <FormContent>
              {!isLoginMode && (
                <Input
                  id='nombre'
                  label='Nombre:'
                  type='text'
                  onInput={inputHandler}
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Campo Obligatorio'
                />
              )
              }
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
              <CustomButton>{isLoginMode ? 'Ingresar' : 'Registrarme'}</CustomButton>
              <GoogleButton onClick={signInWithGoogle}>
                <GoogleIcon sx={{ fontSize: 15 }} />
                <p>Ingresar con Google</p>
              </GoogleButton>
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
    </LayoutPage>
  )
}

export default Login