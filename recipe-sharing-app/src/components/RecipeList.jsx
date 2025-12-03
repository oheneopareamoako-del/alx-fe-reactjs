import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <Link to={`/edit/${recipe.id}`}>Edit</Link>
          <DeleteRecipeButton id={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

