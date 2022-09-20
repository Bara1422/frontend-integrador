export const addItemToCart = (cartItems, action) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === action.payload.id)

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === action.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    })
  };

  return [...cartItems, { ...action, quantity: 1 }];
};