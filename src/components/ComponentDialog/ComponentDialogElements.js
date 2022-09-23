import styled, { css } from "styled-components";
import { Title } from "../UI/Title";
import { ComponentLabel } from '../Menu/MenuElements';


export const Dialog = styled.div`
  width: 500px;
  background-color: white;
  /* position: fixed; */
  top: 150px;
  z-index: 1000;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  height: 50%;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    max-width: 94%;
    left: 3%;
    height: 80%;
  }
`;

export const DialogBanner = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 8px 8px 0px 0px;
  position: relative;
  min-height: 50%;
`;

export const DialogBannerName = styled(ComponentLabel)`
  bottom: 0;
  padding: 10px 40px;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  max-height: 400px;
  padding: 40px;
  height: 100%;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px gray;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  
  margin: 10px;
  color: ${(props) => (props.disabled === 'disabled' ? '#979797' : '#fff')};
  height: auto;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  cursor: ${(props) => (props.disabled === 'disabled' ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled === 'disabled' ? '#ccc' : 'red')};
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
  &:disabled {
    opacity: 0.4;
  }
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: calc(100%);
  width: 100%;
  background-color: #000000e6;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  &* {
    z-index: 5;
  }
`;