import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: 'navy' }}>Recipe Sharing App</h1>
        <Routes>
          {/* Home page: show form and list */}
          <Route path="/" element={<><AddRecipeForm /><RecipeList /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

