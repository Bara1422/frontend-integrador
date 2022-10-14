import styled, { keyframes, css } from 'styled-components';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const CartIconShake = keyframes`
  10% {transform: scale(1.05) rotate(5deg);}
  20% {transform: scale(1.05) rotate(-5deg);}
  30% {transform: scale(1.05) rotate(5deg);}
  40% {transform: none;}
`;

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  position: relative;
  ${({ shake }) =>
    shake &&
    css`
    animation: ${CartIconShake} 1s infinite ease;
    `}
`;

export const CartIconStyled = styled(ShoppingBagIcon)`
  width: 45px;
  height: 45px;
 
  
`;

export const ItemCount = styled.div`
  
  border-radius: 50%;
  
  font-size: 12px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;