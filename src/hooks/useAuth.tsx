import React, { ReactNode, createContext, useContext, useState } from "react";
import { auth, provider, facebookProvider } from "../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

export interface IAuthContext {
  setGooglePopup: () => void;
  setFacebookPopup: () => void;
  setLogout: () => void;
  emailSent: string | null;
  // usernameSent: string | null;
  setEmailValue: (email: string | null) => void;
}

interface IAuthProvider {
  children?: ReactNode;
}

//create firebase context
const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [emailSent, sentEmail] = useState<string | null>("");
  // const [usernameSent, sentUsername] = useState<string | null>("");

  //show Google popup
  const setGooglePopup = () => {
    signInWithPopup(auth, provider).then((data) => {
      if (data.user.email) {
        localStorage.setItem("userEmail", data.user.email);
        sentEmail(data.user.email);
      }
    });
  };

  //show Facebook popup
  const setFacebookPopup = () => {
    signInWithPopup(auth, facebookProvider).then((data) => {
      if (data.user) {
        // localStorage.setItem("userEmail", data.user);
        // sentUsername(data.user);
        console.log("name : ", data.user);
      }
    });
  };

  const setEmailValue = (email: string | null) => {
    if (typeof window !== "undefined") {
      sentEmail(email);
    }
    return email;
  };

  const setLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("userEmail");
    });
  };

  return (
    <AuthContext.Provider
      value={{
        emailSent,
        // usernameSent,
        setGooglePopup,
        setLogout,
        setEmailValue,
        setFacebookPopup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//hooks exportation
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AppProvider");
  }
  return context;
};
