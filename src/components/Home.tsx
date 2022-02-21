//import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global");

  return(
    <div className="container">
      <h1>{t("home.title")}</h1>
      <p>{t("home.content")}</p>
    </div>
 ) ;
};

export default Home;
