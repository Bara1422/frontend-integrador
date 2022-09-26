import styled from "styled-components";
import { below } from "../../Styles/utilities";

export const FormContainerStyled = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  background-image: url('img/fotoperfecta copy.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  ${below.large`
    background-position: left;
  `}
`
export const FormStyled = styled.form`
  display: flex;
  background-color: #000;
  max-width: 500px;
  width: 60%;
  flex-direction: column;
  justify-content: center;
  border: 2px #fff solid;
  padding: 2rem;
  border-radius: 15px;
  ${below.med`
    width: 100%
  `}
`
export const FormTitleStyled = styled.h2`
  text-align: center;
  color: #fff;
  padding-bottom: 1rem;
  ${below.large`
    font-size: 1.2rem;
  `}
`
export const InputStyled = styled.input`
  margin-bottom: 0.5rem;
  border-radius: 5px;
  padding-left: 10px;
  background-color: #000;
  outline: none;
  color: #fff;
  border: 2px #fff solid;
  padding: 7px;
  &::placeholder {
    color: #ccc;
  }
`

export const TextAreaStyled = styled.textarea`
   margin-bottom: 0.5rem;
  border-radius: 5px;
  padding-left: 10px;
  background-color: #000;
  outline: none;
  color: #fff;
  border: 2px #fff solid;
  padding: 7px;
  &::placeholder {
    color: #ccc;
  }
  font-family: 'Roboto', sans-serif;
`

export const SubmitStyled = styled.button`
 border: 2px #fff solid;
    width: 30%;
    margin: 0 auto;
    border-radius: 5px;
    text-align: center;
    border: none;
    padding: 0.5rem;
    background-color: #000;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    ${below.small`
      font-size: 0.8rem;
    `}
  &:hover {
    color: #BC02CB;
  };
`