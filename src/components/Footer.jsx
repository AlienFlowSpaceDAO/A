import { Link } from "react-router-dom";
import "./footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <section className="first-footer">
        <h3>Earth Powered Space</h3>
        <ul className="list-footer">
          <li>mail</li>
          <li>face</li>
          <li>insta</li>
          <li>linkedin</li>
          <li>telegram</li>
          <li>twitter</li>
          <li>whats</li>
          <li>youtu</li>
        </ul>
      </section>

      <ul className="second-footer">
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
