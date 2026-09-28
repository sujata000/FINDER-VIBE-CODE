import { Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navbar from "./components/Navbar";
import ErrorMessage from "./components/ErrorMessage";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useLocalStorage("favoriteRecipes", []);

  function toggleFavorite(recipe) {
    const { idMeal, strMeal, strMealThumb, strCategory, strArea } = recipe;
    const alreadySaved = favorites.some((favorite) => favorite.idMeal === idMeal);

    if (alreadySaved) {
      setFavorites(favorites.filter((favorite) => favorite.idMeal !== idMeal));
    } else {
      setFavorites([
        ...favorites,
        { idMeal, strMeal, strMealThumb, strCategory, strArea },
      ]);
    }
  }

  return (
    <>
      <Navbar favoritesCount={favorites.length} />
      <main className="page">
        <Routes>
          <Route
            path="/"
            element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />}
          />
          <Route
            path="/recipe/:id"
            element={
              <RecipeDetails favorites={favorites} onToggleFavorite={toggleFavorite} />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />
            }
          />
          <Route path="*" element={<ErrorMessage message="Page not found." />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
