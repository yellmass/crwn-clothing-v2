import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Spinner } from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";


const Categories = () => {
  const { categoryName } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[categoryName]);

  useEffect(()=>{
    setProducts(categoriesMap[categoryName])
  }, [categoryName, categoriesMap])

  return (
    <Fragment>
      <h1>{categoryName.toUpperCase()}</h1>
      <div className="products-container">
        { isLoading ? <Spinner /> :
          (products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )))}
      </div>
    </Fragment>
  );
};

export default Categories;
