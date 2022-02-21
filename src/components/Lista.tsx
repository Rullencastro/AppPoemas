import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchPoems } from "../store/poemsSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Lista = () => {
  const dispatch = useAppDispatch();
  const [t] = useTranslation("global");
  const { poems } = useAppSelector((state) => state.poems);

  useEffect(() => {
    dispatch(fetchPoems());
  }, [dispatch]);

  return (
    <div className="container">
      {poems.length === 0 ? (
        <p>{t("list.loading")}</p>
      ) : (
        poems.map((p, index) => (
          <div key={index} className="card m-2">
            <div className="row card-body">
              <div className="col-10">
                <h5>{p.title}</h5>
                <p>{p.poet.name}</p>
              </div>
              <div className="col-2 d-flex align-items-end justify-content-end">
                <Link
                  to="/poem_info"
                  state={poems[index]}
                  className="btn btn-outline-primary"
                >
                  {t("list.more")}
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Lista;
