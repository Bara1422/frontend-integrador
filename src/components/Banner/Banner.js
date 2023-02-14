import styled from "styled-components";
import BannerBg from '../../assets/img/bannerBg.png';
import { below } from "../../Styles/utilities";


export const Banner = styled.div`
  max-height: 80vh;
  height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('img/bannerBg.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  color: #fff;
  -webkit-text-stroke: 1.7px black;
  font-size: 2rem;
  font-weight: bold;
  & h2 {
    margin-top: 250px;
    font-size: 3.5rem;
    text-align: center;
    ${below.small`
      font-size: 2.5rem;
  `}
  }

  & p {
    text-align: center;
    border-radius: 20px;
    font-size: 3.5rem;
    padding: 5px;
    ${below.small`
    font-size: 2.5rem
  `}
  }
`;