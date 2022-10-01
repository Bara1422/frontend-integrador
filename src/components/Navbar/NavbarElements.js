import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { below } from '../../Styles/utilities';


export const NavbarStyled = styled.div`
  padding: 20px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #111;
  z-index: 999;
  display: flex;
  color: #fff;
  border-bottom: 1px solid #e5edef;
  ${below.small`
    padding-left: 5px;
    display: block;
  `}
`;


export const Logo = styled.img`
  max-width: 50px;
  margin-left: 2rem;
  height: auto;
  ${below.large`
    max-width: 45px;
  `}
  ${below.small`
    margin-left: 0.5rem;
    max-width: 35px;
    height:auto;
  `}
`;



export const Divider = styled.div`
  display: inline-block;
  border-left: 1px solid #dfdddd;
  margin: 0 25px;
  height: 25px;
`;
export const LoginButton = styled.button`
  cursor: pointer;
  color: #fff;
  border-radius: 7px;
  padding: 5px 15px;
  border: none;
  font-size: 13px;
  height: 35px;
  margin: 0 5px;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #BC02CB;
  background-color: #000;
  &:hover {
    color: #BC02CB;
    border: 1px solid #fff
  }
`;

export const NavigationMenu = styled.div`
  display: flex;
  padding: 15px;
  align-self: center;
  justify-content: flex-end;
  margin-right: 20px;
  ${below.large`
    margin-right: 0px;
    padding-right: 0px;
  `}
  ${below.small`
    padding-top: 1.5rem;
  `}
`;

export const LinkStyled = styled(Link)`
  max-height: 100%;
  height: 100%;
  display: flex;
  ${below.small`
    justify-content: center;
  `}
  h2 {
    padding-left: 10px;
    font-size: 2.5rem;
    display: flex;
    align-items: flex-end;
    color: #fff;
    &:hover {
      color: #BC02CB;
      transition: 0.5s;
    }
    ${below.large`
      font-size: 2rem;
    `}
    ${below.small`
      font-size: 2rem;
    `}
  }
`;