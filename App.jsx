import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        {/* Additional routes for RecipeDetail or EditRecipeForm */}
      </Routes>
    </Router>
  );
}

export default App;

