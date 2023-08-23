import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss'
import CheckoutHeader from "../../components/checkout-header.component.jsx/checkout-header.component";


const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      <div className='checkout-container' >
        <CheckoutHeader />
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
        <span className='total' >TOTAL: $ {cartItems.reduce((checkoutSum, cartItem)=> checkoutSum + (cartItem.price*cartItem.quantity), 0)} </span>
      </div>
    </div>
  );
};

export default Checkout;
