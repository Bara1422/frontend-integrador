import styled from "styled-components";
import { below } from "../../Styles/utilities";

export const NavbarStyled = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
  height: auto;
  padding: 10px;
  background-color: #000;
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 3rem;
    height: auto;
  ${below.large`
    display: block;
    text-align: center;
    padding-top: 2rem;
  `}
  }
  li {
    ${below.large`
      padding-bottom: 2rem;
    `}
    ${below.med`
      font-size: 2.5rem;
    `}
  }
  a {
    color: #fff;
    &:hover {
      color: #BC02CB;
      transition: 0.5s;
    }
  }
  
`;