// import { useContext } from "react";
import Button from "../button/button.component";
import "./product-card.styles.scss";
// import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.slice";
import { useDispatch } from "react-redux";


const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  // const {addItemToCart} = useContext(CartContext)
  const dispatch = useDispatch();  

  return (
    <div className="product-card-container">
      <img alt={`${name}`} src={imageUrl} /> 
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> {price} </span>
      </div>
      <Button onClick={()=>dispatch(addItemToCart(product))} buttonType="inverted" children="ADD TO CART" />
    </div>
  );
};

export default ProductCard;
