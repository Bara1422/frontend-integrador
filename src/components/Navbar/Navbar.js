import React, { useEffect } from 'react';
import { NavbarStyled, Logo, LinkStyled, NavigationMenu, Divider, LoginButton } from './NavbarElements';
import img_Logo from '../../assets/img/Computer_n_screen.svg.png';
import { CartIcon } from '../Cart/CartIcon';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserMenu } from '../UserMenu/UserMenu';
import * as userActions from '../../redux/user/user-actions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAuth } from '../../context/AuthContext';


export const Navbar = ({ shake }) => {
  const { currentUser, isAuthenticated, authCheckState } = useAuth();
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden());
  };

  const handleCart = () => {
    dispatch(cartActions.cartHidden());
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    authCheckState();
  }, [authCheckState]);

  return (

    <NavbarStyled>
      <LinkStyled to='/' onClick={handleCart}>
        <Logo src={img_Logo} />
        <h2>Todo-Gaming</h2>
      </LinkStyled>
      <NavigationMenu>
        <CartIcon shake={shake} />
        <Divider />
        {currentUser && isAuthenticated ? (
          <>
            <AccountCircleIcon sx={{ fontSize: 26 }} style={{ cursor: 'pointer' }} onClick={handleToggle} data-aos='fade-left' />
            <UserMenu />
          </>
        ) : (
          <LinkStyled to='/login'>
            <LoginButton>Ingresar</LoginButton>
          </LinkStyled>
        )}


      </NavigationMenu>
    </NavbarStyled>
  );
};
