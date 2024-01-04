import { Fragment } from "react";
import Login from "./pages/Login";
import "./styles/index.scss";
import AppRoutes from "./routes/AppRoutes";

const App = (): JSX.Element => {
  return (
    <Fragment>
      <AppRoutes />
    </Fragment>
  );
};

export default App;
