import { theme } from './Colors';
import { css } from 'styled-components';

export const status = (type) => {
  switch (type) {
    case 'Realizado':
      return css`
        color: ${theme.success};
        background-color: ${theme.bgSuccess};
      `;
    case 'Pendiente':
      return css`
        color: ${theme.pending};
        background-color: ${theme.bgPending};
      `;
    case 'Cancelado':
      return css`
        color: ${theme.canceled};
        background-color: ${theme.bgCanceled};
      `;
    default:
      return css`
        color: ${theme.pending};
        background-color: ${theme.bgPending};
      `;
  }
};
