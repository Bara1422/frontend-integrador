import styled from "styled-components";

export const NavbarStyled = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
  height: 90px;
  padding: 10px;
  background-color: #000;
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 3rem;
  }
  li {
  }
  a {
    color: #fff;
    &:hover {
      color: #BC02CB;
      transition: 0.5s;
    }
  }
  
`;