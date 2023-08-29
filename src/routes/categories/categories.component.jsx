import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";




const Categories = () => {
    const { categoryName } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const products = categoriesMap[categoryName];
    
    return (
        <Fragment>
        <h1>{categoryName.toUpperCase()}</h1>
        <div className="products-container">
            {products && products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
    </Fragment>
    )
    
}

export default Categories;