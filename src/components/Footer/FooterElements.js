import styled from 'styled-components';
import { below } from '../../Styles/utilities';

export const FooterContainerStyled = styled.section`
  border-top: 2px #fff solid;
  display: flex;
  padding: 1rem;
  background-color: #000;
  width: 100%;
`;

export const FooterMenuStyled = styled.div`
  color: #fff;
  margin: 0 auto;
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 5rem;
  ${below.small`
  padding-right: 1rem
  `}
  h4 {
    text-decoration: underline;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  li {
    list-style: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #bc02cb;
      text-decoration: none;
    }
  }
`;
export const CopyrightStyled = styled.section`
  color: #ddd;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 5rem;
  flex-direction: column;
  ${below.small`
    padding-left: 0rem;
  `}
  h6 {
    font-size: 0.8rem;
  }
  div {
    margin-bottom: 10px;
    a {
      margin-left: 10px;
      color: white;
      &:hover {
        color: #bbb;
      }
    }
  }
`;
