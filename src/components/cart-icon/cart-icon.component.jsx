import "./cart-icon.styles.jsx";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  

  const toggleIsCartOpen = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount> {cartItems.reduce((partialSum, cartItem)=> partialSum + cartItem.quantity, 0)} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
