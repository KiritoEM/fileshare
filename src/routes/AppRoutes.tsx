import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import UploadFile from "../pages/UploadFile";
import AllFiles from "../pages/AllFiles";

const AppRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/upload-file" Component={UploadFile} />
        <Route path="/All-file" Component={AllFiles} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
