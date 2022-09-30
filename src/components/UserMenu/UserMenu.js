import React from 'react'
import { MenuOptionElement, MenuOptions, UserMenuStyled, WelcomeTitle, Shadow } from './UserMenuElements'
import { auth } from '../../firebase/firebase.utils2'
import { signOut } from 'firebase/auth'
import * as userActions from '../../redux/user/user-actions'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export const UserMenu = ({ user }) => {
  const { hiddenMenu } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden())
  }
  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggle} />}
      {
        !hiddenMenu ? (<UserMenuStyled>
          <WelcomeTitle>Hola {user.displayName.toUpperCase()}</WelcomeTitle>
          <MenuOptions>
            <Link to='/mis-ordenes' onClick={handleToggle}>
              <MenuOptionElement >Mís ordenes</MenuOptionElement>
            </Link>
            <MenuOptionElement onClick={logout}>Cerrar Sesión</MenuOptionElement>
          </MenuOptions>
        </UserMenuStyled>) : null
      }
    </>

  )
}
