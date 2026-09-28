# 🍽️ Recipe Finder

Recipe Finder is a single-page React application that lets you search for meals by name or ingredient using the free TheMealDB API. You can browse results in a responsive card grid, read full ingredients and instructions, and save your favorite recipes so they are still there after a page refresh.

**Live demo:** _add your Vercel/Netlify link here_

## Features

- Search recipes by **name** or by **ingredient**
- Filter recipes by **category** (Beef, Dessert, Vegetarian, ...)
- Responsive card grid with image, title, category and area
- Recipe details page with ingredients, measures and instructions
- Add or remove **favorites** with a heart button, saved in `localStorage`
- Dedicated **Favorites page** (React Router)
- Loading, error (with "Try again") and "no recipes found" states
- Works on desktop and mobile screen sizes

## Technologies

- React 18 (functional components and hooks only)
- Vite
- React Router (`react-router-dom`)
- Plain CSS (no UI library)
- [TheMealDB API](https://www.themealdb.com/api.php) (no API key needed)

## Setup

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd recipe-finder
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
4. Open the local address shown in the terminal (usually http://localhost:5173)

To create a production build: `npm run build`

## Screenshots

| Home / search results | Recipe details | Favorites page |
| --- | --- | --- |
| ![Home](screenshots/home.png) | ![Details](screenshots/details.png) | ![Favorites](screenshots/favorites.png) |

_Replace the images above with your own screenshots._

## Known Limitations

- Results from ingredient and category searches come from a different API endpoint that only returns the image and title, so those cards do not show category/area.
- Search returns whatever TheMealDB provides; there is no pagination.
- Favorites are stored only in the current browser (no user accounts).
