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
`