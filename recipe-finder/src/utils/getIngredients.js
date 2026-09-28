function getIngredients(recipe) {
  const ingredients = [];

  for (let number = 1; number <= 20; number++) {
    const name = recipe[`strIngredient${number}`];
    const measure = recipe[`strMeasure${number}`];

    if (name && name.trim() !== "") {
      ingredients.push({
        name: name.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  return ingredients;
}

export default getIngredients;
