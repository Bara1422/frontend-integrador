import styled, { css } from "styled-components";
import { below } from "../../Styles/utilities";
import { ConfirmButton, DialogContent } from '../ComponentDialog/ComponentDialogElements';

export const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 93px;
  width: 300px;
  background-color: #fff;
  height: calc(100% - 93px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(100%)'};
  transition-property: transform;
  transition-duration: 0.5s;
  ${below.small`
    top: 140px;
    height: 83.5%;
    `}
`;

export const OrderContent = styled(DialogContent)`
  padding: 20px;
  max-height: 100%;
  height: 100%;
  align-items: flex-start;
 
`;

export const OrderContainer = styled.div`
  padding: 10px 5px;
  width: 100%;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderItem = styled.div`
  padding: 10px 5px;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  justify-content: space-between;
  div{
    p{
      color: green;
      font-weight: bold;
    }
  }
`;

export const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

export const ClearCartButton = styled(ConfirmButton)`
  width: 100px;
  font-size: 13px;
  margin: 0;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ccc !important;
      color: #fff;
      border: 0px rgb(184, 182, 182) solid;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
`}
`;