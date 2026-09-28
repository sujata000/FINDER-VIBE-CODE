import { Link } from "react-router-dom";
import RecipeGrid from "../components/RecipeGrid";

function Favorites({ favorites, onToggleFavorite }) {
  return (
    <section>
      <h1 className="section-title">Your Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p className="empty-message">
          You have no favorites yet. <Link to="/">Find a recipe</Link> and tap the
          heart to save it.
        </p>
      ) : (
        <RecipeGrid
          recipes={favorites}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </section>
  );
}

export default Favorites;
