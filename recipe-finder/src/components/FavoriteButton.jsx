function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      type="button"
      className={isFavorite ? "favorite-button active" : "favorite-button"}
      onClick={onToggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorite}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
}

export default FavoriteButton;
