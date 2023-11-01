import { createSlice } from "@reduxjs/toolkit";

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


export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action){
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    decreaseItemQuantity(state, action){
      state.cartItems = decreaseCartItem (state.cartItems, action.payload);
    },
    removeItemFromCart(state, action){
      state.cartItems = removeCartItem (state.cartItems, action.payload);
    },
    setIsCartOpen(state, action){
      state.isCartOpen = action.payload;
    },
  }
})

export const { addItemToCart, decreaseItemQuantity, removeItemFromCart, setIsCartOpen } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
