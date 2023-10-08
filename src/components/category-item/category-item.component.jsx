import { useNavigate } from 'react-router-dom';
import './category-item.styles.jsx';
import { useSelector } from 'react-redux';


import { selectCategoriesMap } from '../../store/categories/category.selector.js';
import { CategoryContainer, BackgroundImage, Body } from './category-item.styles';




const CategoryItem = ({ category }) => { 
 
  const categoriesMap = useSelector(selectCategoriesMap);
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const navigateHandler = () => {
  categoriesMap && navigate( `shop/${Object.keys(categoriesMap).find((item)=>item===title)}`);
  }
  return (
    <CategoryContainer onClick={navigateHandler} >
      <BackgroundImage imageUrl = {imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryContainer>
  );
};

export default CategoryItem;
