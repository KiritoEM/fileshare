import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";
import { useLoader } from "./hooks/useLoader";
import { Fragment } from "react";

const App = (): JSX.Element => {
  const { loading , loadingUpload } = useLoader();

  return (
    <Fragment>
      {loading ? <Loader text="Chargement de la page en cours..." /> : null}
      {loadingUpload ? <Loader text="Upload des fichiers en cours..." /> : null}
      <AppRoutes />
    </Fragment>
  );
};

export default App;
