import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss"

const Shop = () => {
  const { existingProducts } = useContext(ProductsContext);

  return (
    <div className="products-container" >
      {existingProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
