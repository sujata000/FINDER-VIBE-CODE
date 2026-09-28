import { useState } from "react";

function SearchBar({ categories, onSearch }) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("name");
  const [category, setCategory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() === "") return;

    setCategory("");
    onSearch(mode, text.trim());
  }

  function handleCategoryChange(event) {
    const chosenCategory = event.target.value;
    setCategory(chosenCategory);

    if (chosenCategory !== "") {
      setText("");
      onSearch("category", chosenCategory);
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Search for a dish or an ingredient..."
        aria-label="Search recipes"
      />
      <select
        value={mode}
        onChange={(event) => setMode(event.target.value)}
        aria-label="Search by"
      >
        <option value="name">By name</option>
        <option value="ingredient">By ingredient</option>
      </select>
      <button type="submit">Search</button>
      <select
        value={category}
        onChange={handleCategoryChange}
        aria-label="Filter by category"
      >
        <option value="">Filter by category</option>
        {categories.map((item) => (
          <option key={item.idCategory} value={item.strCategory}>
            {item.strCategory}
          </option>
        ))}
      </select>
    </form>
  );
}

export default SearchBar;
