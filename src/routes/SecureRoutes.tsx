import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Ichildren {
  children: ReactNode;
}

const SecureRoutes = ({ children }: Ichildren): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail && window.location.pathname !== "/") {
      navigate("/");
    } else {
      if (userEmail && location.pathname === "/") {
        navigate("/upload-file");
      }
    }
  }, [navigate]);

  return <>{children}</>;
};

export default SecureRoutes;
