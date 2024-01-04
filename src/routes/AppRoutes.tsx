import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
