import styled from 'styled-components';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export const CartIconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  position: relative;
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