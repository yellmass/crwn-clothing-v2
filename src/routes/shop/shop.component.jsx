import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
import { Spinner } from "../../components/spinner/spinner.component";

import "./shop.styles.scss";

const Shop = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  
  return (
    <Fragment>
      { isLoading ? <Spinner /> :
        (Object.keys(categoriesMap).map((title, index) => (
        <Fragment key={index}>
          <Link to={title} ><h2>{title.toLocaleUpperCase()}</h2></Link>
          <div className="products-container">
            {categoriesMap[title].slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      )))}
      
    </Fragment>
  );
};

export default Shop;
