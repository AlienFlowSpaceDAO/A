import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
