// CategoriesList.js
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { getCategories } from '../../services/categoriesServices';
import { Link } from 'react-router-dom';

const CategoriesList = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => alert(error));
  }, [])

  return (
    <section id='categoriasContainer'>
      <h2 id='tituloCategorias'>Categories</h2>
      <ul id='listaTarjetas'>
        {categories.map(category => (
          <li key={category.category_id}>
            <Link to={`/categorydetails?categoryId=${category.category_id}`}>
              <CategoryCard name={category.name} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoriesList;
