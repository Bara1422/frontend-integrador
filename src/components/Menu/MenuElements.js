import styled from "styled-components";

export const ComponentGrid = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  justify-items: center;
  gap: 20px;
  
`;

export const Component = styled.div`
  max-height: 400px;
  height: 300px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 250px;
  max-width: 18rem;
`;

export const ComponentsStyled = styled.div`
  height: 200px;
  margin: 0px 20px 50px 20px;
  padding-top: 10rem;
  z-index: 3;
  & h3 {
    text-align: center;
    font-size: 40px;
  }
`

export const ComponentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`