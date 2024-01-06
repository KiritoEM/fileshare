import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";
import { FileProvider } from "./hooks/useFile.tsx";
import { LoaderProvider } from "./hooks/useLoader";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <FileProvider>
          <App />
        </FileProvider>
      </AuthProvider>
    </LoaderProvider>
  </React.StrictMode>
);
