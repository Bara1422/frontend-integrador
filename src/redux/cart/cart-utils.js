export const addItemToCart = (componentItem, action) => {
  const existingCartItem = componentItem.find((cartItem) => cartItem.id === action.id)

  if (existingCartItem) {
    return componentItem.map(cartItem => {
      return cartItem.id === action.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
    })
  };

  return [...componentItem, { ...action, quantity: 1 }];
};

export const removeItemsToCart = (componentItem, action) => {
  const existingCartItem = componentItem.find((cartItem) => cartItem.id === action.id)

  if (existingCartItem.quantity === 1) {
    return componentItem.filter(cartItem => cartItem.id !== action.id)
  }

  return componentItem.map(cartItem => {
    return cartItem.id === action.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
  })
}