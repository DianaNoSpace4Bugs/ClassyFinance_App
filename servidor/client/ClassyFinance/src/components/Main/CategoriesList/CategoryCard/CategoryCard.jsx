import React, { useEffect, useState } from 'react';

const CategoriesCard = (props) => {
  return (
    <section id='cardContainer'>
      <img src={`/assets/categories/${props.name}.png`} alt={`Imagen de la categoría ${props.name}`} />
      <h3>{props.name}</h3>
    </section>
  );
};

export default CategoriesCard;

