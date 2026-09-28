import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeGrid from "../components/RecipeGrid";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { searchRecipes, getCategories } from "../utils/mealApi";

function Home({ favorites, onToggleFavorite }) {
  const [search, setSearch] = useState({ mode: "name", value: "chicken" });
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  useEffect(() => {
    let ignore = false;

    async function loadRecipes() {
      try {
        const meals = await searchRecipes(search.mode, search.value);
        if (!ignore) setRecipes(meals);
      } catch {
        if (!ignore) setError("Could not load recipes. Please check your connection.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadRecipes();

    return () => {
      ignore = true;
    };
  }, [search]);

  function startSearch(mode, value) {
    setLoading(true);
    setError("");
    setSearch({ mode, value });
  }

  const heading =
    search.mode === "category"
      ? `${search.value} recipes`
      : `Results for "${search.value}"`;

  return (
    <section>
      <SearchBar categories={categories} onSearch={startSearch} />
      <h1 className="section-title">{heading}</h1>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage
          message={error}
          onRetry={() => startSearch(search.mode, search.value)}
        />
      )}

      {!loading && !error && recipes.length === 0 && (
        <p className="empty-message">No recipes found. Try a different search.</p>
      )}

      {!loading && !error && recipes.length > 0 && (
        <RecipeGrid
          recipes={recipes}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </section>
  );
}

export default Home;
