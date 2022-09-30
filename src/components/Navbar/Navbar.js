import React, { useState } from 'react'
import { NavbarStyled, Logo, LinkStyled, NavigationMenu, Divider, LoginButton } from './NavbarElements'
import img_Logo from '../../assets/img/Computer_n_screen.svg.png'
import { CartIcon } from '../Cart/CartIcon'
import { useDispatch, useSelector } from 'react-redux'
import * as cartActions from '../../redux/cart/cart-actions'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserMenu } from '../UserMenu/UserMenu'
import * as userActions from '../../redux/user/user-actions'

export const Navbar = () => {
  const currentUser = useSelector(state => state.user.currentUser)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(userActions.toggleMenuHidden())
  }

  const handleCart = () => {
    dispatch(cartActions.cartHidden())
  }

  return (

    <NavbarStyled>
      <LinkStyled to='/' onClick={handleCart}>
        <Logo src={img_Logo} />
        <h2>Todo-Gaming</h2>
      </LinkStyled>
      <NavigationMenu>
        <CartIcon />
        <Divider />
        {currentUser ? (
          <>
            <AccountCircleIcon fontSize='large' style={{ cursor: 'pointer' }} onClick={handleToggle} />
            <UserMenu user={currentUser} />
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
