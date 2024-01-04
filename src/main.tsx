import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { FirebaseProvider } from "./hooks/useFirebase.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
