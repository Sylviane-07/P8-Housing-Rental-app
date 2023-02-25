import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Kasa logo" />
      <nav className="header__nav">
        <Link className="header__nav-link" to="/">
          Accueil
        </Link>
        <Link className="header__nav-link" to="/about">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
