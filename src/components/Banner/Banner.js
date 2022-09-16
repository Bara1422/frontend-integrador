import styled from "styled-components";


export const Banner = styled.div`
  max-height: 80vh;
  height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('img/banner2.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: contrast(75%);
  color: #fff;
  -webkit-text-stroke: 1.7px black;
  font-size: 2rem;
  font-weight: bold;

  & h2 {
    margin-top: 300px;
    text-align: center;
  }

  & p {
    text-align: center;
    margin: 50px 20px 0;
    border: 1.5px solid #BC02CB;
    
    border-radius: 20px;
    padding: 20px;
  }
`;