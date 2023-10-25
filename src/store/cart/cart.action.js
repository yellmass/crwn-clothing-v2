import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";


const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find((item) => item.id === productToAdd.id);

  if (foundItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const decreaseCartItem = (cartItems, itemToDecrease) => {
  if (itemToDecrease.quantity > 1) {
    return cartItems.map((item) =>
      item.id === itemToDecrease.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  } else {
    return cartItems.filter((item) => item.id !== itemToDecrease.id);
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

//////


// const updateCartReducer = (newCartItems) => {
//   const newCartCount = newCartItems.reduce(
//     (sum, cartItem) => sum + cartItem.quantity,
//     0
//   );

//   const newCartTotal = newCartItems.reduce(
//     (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
//     0
//   );
    
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//     cartItems: newCartItems,
//     cartCount: newCartCount,
//     cartTotal: newCartTotal,
//   });
// };
export const setIsCartOpen = (boolean) =>
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

export const decreaseItemQuantity = (cartItems, itemToDecrease) => {
  const newCartItems = decreaseCartItem(cartItems, itemToDecrease);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
};

