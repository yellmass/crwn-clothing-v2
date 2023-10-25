import "./cart-icon.styles.jsx";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
import { useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import { useDispatch } from "react-redux";

const CartIcon = () => {
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount> {cartCount} </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
