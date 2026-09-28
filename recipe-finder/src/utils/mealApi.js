const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

async function fetchFromApi(path) {
  const response = await fetch(`${BASE_URL}/${path}`);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const text = await response.text();
  return text ? JSON.parse(text) : {};
}

export async function searchRecipes(mode, value) {
  const term = encodeURIComponent(value.trim());
  let path = `search.php?s=${term}`;

  if (mode === "ingredient") {
    path = `filter.php?i=${term}`;
  } else if (mode === "category") {
    path = `filter.php?c=${term}`;
  }

  const data = await fetchFromApi(path);
  return Array.isArray(data.meals) ? data.meals : [];
}

export async function getRecipeById(id) {
  const data = await fetchFromApi(`lookup.php?i=${encodeURIComponent(id)}`);
  return Array.isArray(data.meals) ? data.meals[0] : null;
}

export async function getCategories() {
  const data = await fetchFromApi("categories.php");
  return Array.isArray(data.categories) ? data.categories : [];
}
