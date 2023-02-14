import styled from 'styled-components';
import { below } from '../../Styles/utilities';

export const LayoutPage = styled.div`
  
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: auto;
  min-height: 100vh;
  height: 100%;
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  padding: 150px;
  form {
    ${below.small`
      width: 100%;
    `}
  }
  ${below.large`
    padding: 150px 0px;
  `}
  ${below.small`
    width: 100%;
  `}
`;

