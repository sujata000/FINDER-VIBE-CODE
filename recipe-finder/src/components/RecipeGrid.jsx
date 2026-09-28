import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes, favorites, onToggleFavorite }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          isFavorite={favorites.some((favorite) => favorite.idMeal === recipe.idMeal)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default RecipeGrid;
