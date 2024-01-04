import React, { useEffect } from "react";
import { useFirebase } from "../../hooks/useFirebase";
import { useNavigate } from "react-router-dom";

interface Iauth {
  authGoogle: () => void;
  //   authFacebook: () => void;
}

const LoginConnect: React.FC<Iauth> = ({ authGoogle }): JSX.Element => {
  const navigate = useNavigate();
  const { emailSent } = useFirebase();
  useEffect(() => {
    if (emailSent) {
      // navigate(`/upload`)
      alert(`bienvenue ${emailSent}`);
    }
  }, [emailSent]);
  return (
    <section id="login-connect">
      <div className="btn-google">
        <button
          className="btn btn-1"
          onClick={() => {
            authGoogle();
          }}
        >
          <div className="img">
            <img src="/google.png" alt="" />
          </div>
          Se connecter avec Google
        </button>
      </div>
      <div className="btn-google">
        <button className="btn btn-2">
          <div className="img">
            <img src="/facebook.png" alt="" />
          </div>
          Se connecter avec Facebook
        </button>
      </div>
    </section>
  );
};

export default LoginConnect;
