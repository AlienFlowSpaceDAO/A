import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav>
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
      </ul>
      <li>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("es")}>Español</button>
        <button onClick={() => changeLanguage("zh")}>Chino</button>
        <button onClick={() => changeLanguage("ja")}>Japones</button>
        <button onClick={() => changeLanguage("pt")}>Portugues</button>
        <button onClick={() => changeLanguage("fr")}>Frances</button>
      </li>
    </nav>
  );
}

export default Navbar;
