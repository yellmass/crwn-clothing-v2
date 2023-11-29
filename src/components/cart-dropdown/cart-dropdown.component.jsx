import "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  EmptyMessage,
  CartDropdownContainer,
  CartItems,
} from "./cart-dropdown.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import { useEffect, useRef } from "react";
import { setIsCartOpen } from "../../store/cart/cart.slice.js";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  

  // Add a click event listener to the document
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <CartDropdownContainer ref={dropdownRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        onClick={goToCheckoutHandler}
        buttonType=""
        children="GO TO CHECKOUT"
      />
    </CartDropdownContainer>
  );
};

export default CartDropdown;
