import React, { useEffect } from 'react';
import {
  MenuOptionElement,
  MenuOptions,
  UserMenuStyled,
  WelcomeTitle,
  Shadow,
} from './UserMenuElements';

import * as userActions from '../../redux/user/user-actions';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as cartActions from '../../redux/cart/cart-actions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../context/AuthContext';

export const UserMenu = () => {
  const { hiddenMenu } = useSelector((state) => state.user);
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

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      {!hiddenMenu && <Shadow onClick={handleToggle} />}
      {!hiddenMenu ? (
        <UserMenuStyled data-aos="fade-right">
          <WelcomeTitle>Hola {currentUser.name}</WelcomeTitle>
          <MenuOptions>
            <Link to="/mis-ordenes" onClick={handleToggle}>
              <MenuOptionElement>Mís ordenes</MenuOptionElement>
            </Link>
            <MenuOptionElement onClick={handleLogout}>
              Cerrar Sesión
            </MenuOptionElement>
          </MenuOptions>
        </UserMenuStyled>
      ) : null}
    </>
  );
};
