import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cartReducer) => cartReducer.isCartOpen
  );

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce((sum, cartItem) => sum + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0
      )
);

