import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import "./navbar.css";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">{t("navbar.home")}</Link>
        </li>
        <li>
          <Link to="/about">{t("navbar.about")}</Link>
        </li>
        <li>
          <Link to="/academy">{t("navbar.academy")}</Link>
        </li>
        <li>
          <Link to="/club">{t("navbar.club")}</Link>
        </li>
        <li>
          <Link to="/conetworking">{t("navbar.conetworking")}</Link>
        </li>
        <li className="language-icon">
          <img src="icono.languaje" alt="idioma" />
          <div className="dropdown">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("es")}>Español</button>
            <button onClick={() => changeLanguage("zh")}>Chino</button>
            <button onClick={() => changeLanguage("ja")}>Japones</button>
            <button onClick={() => changeLanguage("pt")}>Portugues</button>
            <button onClick={() => changeLanguage("fr")}>Frances</button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;