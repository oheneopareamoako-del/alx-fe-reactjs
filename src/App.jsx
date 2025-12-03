import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Sharing App</h1>

      <AddRecipeForm />
      <hr style={{ margin: "2rem 0" }} />

      <RecipeList />
    </div>
  );
}

export default App;

