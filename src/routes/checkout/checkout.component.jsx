// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import './checkout.styles.scss'
import CheckoutHeader from "../../components/checkout-header.component.jsx/checkout-header.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";


const Checkout = () => {
  // const { cartItems, cartTotal } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);


  return (
    <div>
      <h1>Checkout</h1>
      <div className='checkout-container' >
        <CheckoutHeader />
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
        <span className='total' >TOTAL: $ {cartTotal} </span>
        <PaymentForm />
      </div>
      
    </div>
  );
};

export default Checkout;
