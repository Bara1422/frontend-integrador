import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
  margin: ${({ m }) => (m ? `${m}` : '10px')};
  color: #fff;
  height: auto;
  border-radius: 8px;
  border: none;
  padding: 10px;
  width: ${({ w }) => (w ? `${w}` : '200px')};
  cursor: pointer;
  background-color: red;
  text-align: center;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #ccc !important;
      color: #fff;
      border: 1px rgb(184, 182, 182) solid;
      cursor: not-allowed !important;
      transition: 0.5s ease-out;
    `}
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
