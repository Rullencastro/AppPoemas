import { IPoem } from "../store/poemsSlice";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PoemInfo = () => {
  const [t] = useTranslation("global");

  const location = useLocation();
  const poem = location.state as IPoem;

  return (
    <div className="container">
      {poem && (
        <div className="card p-3">
          <h1>{poem.title}</h1>
          <h4 className="text-muted">By {poem.poet.name}</h4>
          <p></p>
          <p>{poem.content}</p>
          <p>
            {t("poemInfo.more-info")}{" "}
            <a href={poem.url} className="text-decoration-none">
              {t("poemInfo.here")}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default PoemInfo;
