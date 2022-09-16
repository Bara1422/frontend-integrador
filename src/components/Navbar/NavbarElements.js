import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarStyled = styled.div`
  padding: 20px;
  position: fixed;
  width: 100%;
  background-color: #111;
  z-index: 999;
  display: flex;
  color: #fff;
`;

export const Logo = styled.img`
  max-width: 50px;
  margin-left: 2rem;
  height: auto;
`;
export const LinkStyled = styled(Link)`
  max-height: 100%;
  height: 100%;
  display: flex;
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
  }
`;