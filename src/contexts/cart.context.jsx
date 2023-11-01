// import { createContext, useReducer } from "react";
// import { createAction } from "../utils/reducer/reducer.utils";

// export const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: "SET_CART_ITEMS",
//   SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
// };

// const addCartItem = (cartItems, productToAdd) => {
//   const foundItem = cartItems.find((item) => item.id === productToAdd.id);

//   if (foundItem) {
//     return cartItems.map((item) =>
//       item.id === productToAdd.id
//         ? { ...item, quantity: item.quantity + 1 }
//         : item
//     );
//   } else {
//     return [...cartItems, { ...productToAdd, quantity: 1 }];
//   }
// };

// const decreaseCartItem = (cartItems, itemToDecrease) => {
//   if (itemToDecrease.quantity > 1) {
//     return cartItems.map((item) =>
//       item.id === itemToDecrease.id
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//   } else {
//     return cartItems.filter((item) => item.id !== itemToDecrease.id);
//   }
// };

// const removeCartItem = (cartItems, productToRemove) => {
//   return cartItems.filter((item) => item.id !== productToRemove.id);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   decreaseItemQuantity: () => {},
//   removeItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// const INITIAL_STATE = {
//   isCartOpen: false,
//   cartItems: [],
//   cartCount: 0,
//   cartTotal: 0,
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };

//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       throw new Error(`Unhandled type ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//   const { isCartOpen, cartItems, cartCount, cartTotal } = state;

//   const updateCartReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (sum, cartItem) => sum + cartItem.quantity,
//       0
//     );

//     const newCartTotal = newCartItems.reduce(
//       (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
//       0
//     );

//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems,
//         cartCount: newCartCount,
//         cartTotal: newCartTotal,
//       })
//     );
//   };

//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartReducer(newCartItems);
//   };

//   const decreaseItemQuantity = (itemToDecrease) => {
//     const newCartItems = decreaseCartItem(cartItems, itemToDecrease);
//     updateCartReducer(newCartItems);
//   };

//   const removeItemFromCart = (productToRemove) => {
//     const newCartItems = removeCartItem(cartItems, productToRemove);
//     updateCartReducer(newCartItems);
//   };

//   const setIsCartOpen = (boolean) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     cartItems,
//     addItemToCart,
//     decreaseItemQuantity,
//     removeItemFromCart,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
