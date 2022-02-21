import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Header = () => {
  const [t, i18n] = useTranslation("global");
  const en =
    "https://www.historia.com/wp-content/uploads/2017/07/bandera-del-reino-unido.jpg";
  const es =
    "https://www.freepngimg.com/download/spain/5-2-spain-flag-picture.png";

  return (
    <header className="p-3 mb-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-2 d-flex align-items-center">
            <a href="http://localhost:3000/">
              <img
                width="50"
                height="50"
                src="https://th.bing.com/th/id/R.c635636a6ab39bfe2c860da3d56b37f3?rik=ROMWrSWr21%2fUAQ&riu=http%3a%2f%2ftest.spansklararforeningen.se%2fBilder%2ftexter%2fbuscadichos.gif&ehk=9YkHO7Id5vd6At%2bCf1CW%2f2FPIH%2b3NUDRWW7vNhOHQAc%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </a>
          </div>
          <div className="col-10 d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center">
              <Link className="nav-link text-white" to="/">
                {t("header.home")}
              </Link>
              <Link className="nav-link text-white" to="/">
                {t("header.authors")}
              </Link>
              <Link className="nav-link text-white me-3" to="/">
                {t("header.help")}
              </Link>
              <Link className="btn btn-outline-light me-3" to="/login">
                {t("header.login")}
              </Link>
              <Link className="btn btn-warning me-3" to="/signup">
                {t("header.signup")}
              </Link>
              <img
                className="img-responsive"
                width="40"
                height="30"
                onClick={() => {
                  i18n.language === "es"
                    ? i18n.changeLanguage("en")
                    : i18n.changeLanguage("es");
                }}
                src={i18n.language === "es" ? en : es}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
