import styled from "styled-components";
import { CustomButton } from "../components/UI";

export const Containerbuttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const GoogleButton = styled(CustomButton)`
  display: flex;
  justify-content: space-around;
  background-color: #ff4d94;
`;

export const ALink = styled.a`
  color: red;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

