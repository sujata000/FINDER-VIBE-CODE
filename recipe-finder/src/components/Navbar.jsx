import { Link, NavLink } from "react-router-dom";

function Navbar({ favoritesCount }) {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        🍽️ Recipe Finder
      </Link>
      <nav className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/favorites">Favorites ({favoritesCount})</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
