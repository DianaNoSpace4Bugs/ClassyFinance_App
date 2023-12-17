import React, { useEffect, useState } from 'react';

const CategoriesCard = (props) => {
  return (
    <section>
      <img src={`/public/assets/categories/${props.name}.png`} alt={`Imagen de la categoría ${props.name}`} />
      <h3>{props.name}</h3>
    </section>
  );
};

export default CategoriesCard;

