export const addItemToCart = (componentItem, action) => {
  const existingCartItem = componentItem.find((cartItem) => cartItem.id === action.id)

  if (existingCartItem) {
    return componentItem.map(cartItem => {
      return cartItem.id === action.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    })
  };

  return [...componentItem, { ...action, quantity: 1 }];
};