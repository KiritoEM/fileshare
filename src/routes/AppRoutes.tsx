import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import UploadFile from "../pages/UploadFile";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/upload-file" Component={UploadFile} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
