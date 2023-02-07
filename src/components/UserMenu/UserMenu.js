import React, { useEffect, useState } from 'react';
import { MenuOptionElement, MenuOptions, UserMenuStyled, WelcomeTitle, Shadow } from './UserMenuElements';
import { auth } from '../../firebase/firebase.utils2';
import { signOut } from 'firebase/auth';
import * as userActions from '../../redux/user/user-actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as cartActions from '../../redux/cart/cart-actions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../context/AuthContext';
import { authData } from '../../utils/authData';

export const UserMenu = ({ user }) => {
  const { hiddenMenu } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const handleToggle = () => {
    dispatch(cartActions.cartHidden());
    dispatch(userActions.toggleMenuHidden());
  };
  console.log(currentUser);

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  console.log(authData);
  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggle} />}
      {
        (!hiddenMenu) ? (<UserMenuStyled data-aos='fade-right' >
          <WelcomeTitle >Hola {currentUser.name}</WelcomeTitle>
          <MenuOptions>
            <Link to='/mis-ordenes' onClick={handleToggle}>
              <MenuOptionElement >Mís ordenes</MenuOptionElement>
            </Link>
            <MenuOptionElement onClick={handleLogout}>Cerrar Sesión</MenuOptionElement>
          </MenuOptions>
        </UserMenuStyled>) : null
      }
    </>

  );
};
