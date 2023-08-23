import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const foundItem = cartItems.find(item=>item.id===productToAdd.id);

  if (foundItem){
    return cartItems.map((item)=>item.id===productToAdd.id ? {...item, quantity: item.quantity+1 } : item )
  }else{
    return [...cartItems, {...productToAdd, quantity: 1}]
  }
};

const decreaseCartItem = (cartItems, itemToDecrease) => {
  if(itemToDecrease.quantity>1){
    return cartItems.map((item)=> item.id===itemToDecrease.id ? {...item, quantity: item.quantity-1 } : item )
  }else{
    return cartItems.filter((item)=>item.id !== itemToDecrease.id );
  }
}

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item)=>item.id !== productToRemove.id );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decreaseItemQuantity: () => {},
  removeItemFromCart:() => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decreaseItemQuantity = (itemToDecrease) => {
    setCartItems(decreaseCartItem(cartItems, itemToDecrease))
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, decreaseItemQuantity, removeItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
