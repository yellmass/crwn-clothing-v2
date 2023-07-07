import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img alt={`${name}`} src={imageUrl} /> 
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price"> {price} </span>
      </div>
      <Button buttonType="inverted" children="ADD TO CART" />
    </div>
  );
};

export default ProductCard;
