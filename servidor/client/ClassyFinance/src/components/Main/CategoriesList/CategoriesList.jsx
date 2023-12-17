// CategoriesList.js
import React from 'react';
import CategoryCard from './CategoryCard';
// import { getCategories } from '../../../services/categoriesServices';

const CategoriesList = () => {
  return (
    <div>
      <h2>Categorías:</h2>
     <CategoryCard/> 
      {/* <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <CategoryCard name={category.name} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default CategoriesList;
