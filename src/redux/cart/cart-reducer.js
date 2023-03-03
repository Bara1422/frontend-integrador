import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  REMOVE_ITEM,
  CLEAR_CART,
  CART_HIDDEN,
} from './cart-actions';
import { addItemToCart, removeItemsToCart } from './cart-utils';

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_HIDDEN:
      return {
        ...state,
        hidden: false,
      };
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemsToCart(state.cartItems, action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
