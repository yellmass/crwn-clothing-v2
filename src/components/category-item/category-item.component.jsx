import { useNavigate } from 'react-router-dom';
import './category-item.styles.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';



const CategoryItem = ({ category }) => {
  const { categoriesMap } = useContext(CategoriesContext); 
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const navigateHandler = () => {
  categoriesMap && navigate( `shop/${Object.keys(categoriesMap).find((res)=>res===title)}`);
  }
  return (
    <div onClick={navigateHandler} className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
