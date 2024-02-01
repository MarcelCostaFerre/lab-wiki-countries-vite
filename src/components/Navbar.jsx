import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        WikiCountries
      </NavLink>
    </nav>
  );
}

export default Navbar;
