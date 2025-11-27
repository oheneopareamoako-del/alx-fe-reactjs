import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '5px' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;

