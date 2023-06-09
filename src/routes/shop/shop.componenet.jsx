import './shop.styles.scss';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.componenet';
import Category from '../category/category.component';
import { CategoriesProvider } from '../../context/categories.context';

const Shop = (props) => {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=":category" element={<Category />}/>
    </Routes>
    
  )
};

export default Shop;
