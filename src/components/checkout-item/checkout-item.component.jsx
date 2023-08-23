import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { addItemToCart, decreaseItemQuantity, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = checkoutItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={`${name}`} src={imageUrl} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className='arrow' onClick={() => decreaseItemQuantity(checkoutItem)}>&#10094;</div>
        <span className='value' >{quantity}</span>
        <div className='arrow' onClick={() => addItemToCart(checkoutItem)}>&#10095;</div>
      </span>
      <span className='price' > {price} </span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(checkoutItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
