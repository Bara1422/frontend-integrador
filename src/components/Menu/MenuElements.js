import styled from "styled-components";
import { below } from "../../Styles/utilities";
import { Title } from '../UI/Title';

export const ComponentGrid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr auto;
  text-align: center;
  justify-items: center;
  gap: 20px;
  padding: 50px;
  ${below.xlarge`
    grid-template-columns:1fr 1fr;
  `}
  ${below.large`
    grid-template-columns: 1fr;
  `}
`;

export const Component = styled.div`
  max-height: 300px;
  height: 300px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center 20px;
  background-size: cover;
  background-repeat: no-repeat;
  filter: contrast(75%);
  background-size: 10rem;
  max-width: 18rem;
  display: flex;
  margin-top: 5px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  transition-property: box-shadow margin-top;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: default;
    filter: contrast(100%);
    box-shadow: 0px 0px 15px 0px grey;
    margin-top: 0px;
  }
  h5 {
    font-size: 15px;
    padding: 5px;
  }
  p {
    color: green;
    font-weight: bold;
  }
`;

export const ComponentsStyled = styled.div`
  height: 200px;
  margin: 0;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  user-select: none;
  & h3 {
    text-align: center;
    font-size: 40px;
  }
  ${below.small`
    margin: 0;
  `}
`;

export const ComponentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
export const AddToCardButton = styled.div`
  margin: 10px;
  color: white;
  height: auto;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  background-color: red;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 1;
  }
`;

export const ComponentLabel = styled(Title)`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #00000070;
  width: 100%;
  z-index: 1;
`;

export const TagsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  ${below.large`
    flex-wrap: wrap;
  `}
  ${below.small`
    display: block;
  `}
`;

export const TagCard = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: center;
  background: ${({ selected }) => (selected ? "#e8e8e8" : "#fff")};
color: #000;
font-weight: bold;
box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.09);
border-radius: 15px;
padding: 1rem;
cursor: pointer;
  &:hover {
  background: #e8e8e8;
  box-shadow: none;
}
`;
