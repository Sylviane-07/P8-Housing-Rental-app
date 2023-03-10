import { Link, NavLink } from "react-router-dom";
import logoMobile from "../assets/logo_mb.png"
import logo from "../assets/logo_dsk.png";


function Header() {
  const dskLogo = `${logo} 145w`
  const mbLogo = `${logoMobile} 211w`
  return (
    <header className="header">
      <Link to="/">
        <picture className="header__logo-container">
          <source media="(max-width: 425px)" srcSet={mbLogo} sizes="425px" />
          <source media="(min-width: 768px)" srcSet={dskLogo} sizes="768px" />
          <img className="header__logo" src={logo} alt="Kasa logo" />
        </picture>
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
