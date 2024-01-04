import React, { ReactNode, createContext, useContext, useState } from "react";
import { auth, provider } from "../config/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

export interface IFirebaseContext {
  setGooglePopup: () => void;
  setLogout: () => void;
  emailSent: string | null;
  setEmailValue: (email: string | null) => void;
}

interface IAuthProvider {
  children?: ReactNode;
}

//create firebase context
const FirebaseContext = createContext<IFirebaseContext | null>(null);

export const FirebaseProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [emailSent, sentEmail] = useState<string | null>("");

  //show Google popup
  const setGooglePopup = () => {
    signInWithPopup(auth, provider).then((data) => {
      if (data.user.email) {
        localStorage.setItem("userEmail", data.user.email);
        sentEmail(data.user.email);
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
    <FirebaseContext.Provider
      value={{
        emailSent,
        setGooglePopup,
        setLogout,
        setEmailValue,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

//hooks exportation
// eslint-disable-next-line react-refresh/only-export-components
export const useFirebase = () => {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error("useFirebase must be used within an AppProvider");
  }
  return context;
};
