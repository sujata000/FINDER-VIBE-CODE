import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { getRecipeById } from "../utils/mealApi";
import getIngredients from "../utils/getIngredients";

function RecipeDetails({ favorites, onToggleFavorite }) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    async function loadRecipe() {
      try {
        const data = await getRecipeById(id);
        if (!ignore) setRecipe(data);
      } catch {
        if (!ignore) setError("Could not load this recipe. Please try again.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadRecipe();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!recipe) return <ErrorMessage message="Recipe not found." />;

  const ingredients = getIngredients(recipe);
  const steps = (recipe.strInstructions || "")
    .split("\n")
    .filter((line) => line.trim() !== "");
  const isFavorite = favorites.some((favorite) => favorite.idMeal === recipe.idMeal);

  return (
    <section>
      <Link to="/" className="back-link">
        ← Back to recipes
      </Link>

      <article className="details">
        <img className="details-image" src={recipe.strMealThumb} alt={recipe.strMeal} />

        <div>
          <div className="details-header">
            <h1>{recipe.strMeal}</h1>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={() => onToggleFavorite(recipe)}
            />
          </div>
          <p className="details-meta">
            {[recipe.strCategory, recipe.strArea].filter(Boolean).join(" • ")}
          </p>

          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {ingredients.map((ingredient, index) => (
              <li key={`${index}-${ingredient.name}`}>
                {ingredient.measure} {ingredient.name}
              </li>
            ))}
          </ul>

          <h2>Instructions</h2>
          <div className="instructions">
            {steps.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}

export default RecipeDetails;
