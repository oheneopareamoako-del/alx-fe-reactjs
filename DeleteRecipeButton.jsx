import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(id)} style={{ marginLeft: '5px' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;

