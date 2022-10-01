import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;
  max-width: 600px;
  z-index: 10;
  justify-self: center;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const FormSectionStyled = styled.div`
  padding: 30px;
  border-radius: 15px 15px 0px 0px;
  background-color: #fff;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    padding: 0.5rem 0;
  }
`;

export const InputCheckoutStyled = styled.input`
margin-bottom: 0.5rem;
border-radius: 5px;
padding-left: 10px;
background-color: #f4f4f4;
outline: none;
color: #000;
border: 2px #ddd solid;
padding: 7px;
&::placeholder {
  color: #ccc;
}
`;

export const FormTitle = styled.p`
  color: black;
  text-align: center;
`;