import styled from "styled-components";
import { Link } from "react-router-dom";
import { below } from "../../Styles/utilities";

export const AboutAsStyled = styled.div`
  text-align: center;
  color: #fff;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  width: 100%;
  padding: 2rem;
  background-color: #000;
  p {
    padding-top: 1rem;
    width: 60%;
    margin: 0 auto;
    font-size: 2rem;
    text-align: center;
    ${below.large`
      font-size: 1.2rem;
      width: 80%
    `}
  }
`;

export const LinkAsStyled = styled(Link)`
  color: #BC02CB;
`;