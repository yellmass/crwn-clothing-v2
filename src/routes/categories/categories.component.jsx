import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";


const Categories = () => {
  const { categoryName } = useParams();
  console.log('Render/Re-render is fired!');
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[categoryName]);

  useEffect(()=>{
    console.log('useEffect is fired calling setProducts');
    setProducts(categoriesMap[categoryName])
  }, [categoryName, categoriesMap])

  return (
    <Fragment>
      <h1>{categoryName.toUpperCase()}</h1>
      <div className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Categories;
