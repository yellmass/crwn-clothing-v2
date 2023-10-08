import { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { Link } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";


const Shop = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, index) => (
        <Fragment key={index}>
          <Link to={title} ><h2>{title}</h2></Link>
          <div className="products-container">
            {categoriesMap[title].slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
      
    </Fragment>
  );
};

export default Shop;
