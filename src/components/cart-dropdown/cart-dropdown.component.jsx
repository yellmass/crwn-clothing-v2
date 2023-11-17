import "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import { EmptyMessage, CartDropdownContainer, CartItems } from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);

  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
      {cartItems.length ? (cartItems.map((item) => 
          <CartItem key={item.id} cartItem={item} />
        )) : (<EmptyMessage>Your Cart is Empty</EmptyMessage>)} 
      </CartItems>
      <Button onClick={goToCheckoutHandler} buttonType="" children="GO TO CHECKOUT" />
    </CartDropdownContainer>
  );
};

export default CartDropdown;
