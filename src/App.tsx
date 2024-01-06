import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.scss";

import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";
import { useLoader } from "./hooks/useLoader";
import { Fragment } from "react";

const App = (): JSX.Element => {
  const { loading } = useLoader();

  return (
    <Fragment>
      {loading ? <Loader /> : null}
      <AppRoutes />
    </Fragment>
  );
};

export default App;
