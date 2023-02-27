import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
        <img className="header__logo" src={logo} alt="Kasa logo" />
        </div>
      </Link>
      <nav className="header__nav">
        <NavLink className="header__nav-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="header__nav-link" to="/about">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;