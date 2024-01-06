import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import UploadFile from "../pages/UploadFile";
import AllFiles from "../pages/AllFiles";
import SecureRoutes from "./SecureRoutes";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SecureRoutes>
              <Login />
            </SecureRoutes>
          }
        />
        <Route
          path="/upload-file"
          element={
            <SecureRoutes>
              <UploadFile />
            </SecureRoutes>
          }
        />
        <Route
          path="/All-file"
          element={
            <SecureRoutes>
              <AllFiles />
            </SecureRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
