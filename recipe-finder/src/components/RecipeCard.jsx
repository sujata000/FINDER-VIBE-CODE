import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function RecipeCard({ recipe, isFavorite, onToggleFavorite }) {
  const details = [recipe.strCategory, recipe.strArea].filter(Boolean).join(" • ");

  return (
    <article className="recipe-card">
      <Link to={`/recipe/${recipe.idMeal}`} className="recipe-card-link">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} loading="lazy" />
        <div className="recipe-card-body">
          <h3>{recipe.strMeal}</h3>
          {details && <p>{details}</p>}
        </div>
      </Link>
      <div className="recipe-card-favorite">
        <FavoriteButton
          isFavorite={isFavorite}
          onToggle={() => onToggleFavorite(recipe)}
        />
      </div>
    </article>
  );
}

export default RecipeCard;
