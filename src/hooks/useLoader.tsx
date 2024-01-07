import React, { ReactNode, createContext, useContext, useState } from "react";

export interface ILoaderContext {
  loading: boolean;
  loadingUpload: boolean;
  handleLoad: () => void;
  handleStartLoad: () => void;
  handleStartUpload: () => void;
  handleStopUpload: () => void;
}

interface ILoaderProvider {
  children?: ReactNode;
}

const LoaderContext = createContext<ILoaderContext | null>(null);

export const LoaderProvider: React.FC<ILoaderProvider> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingUpload, setUploading] = useState<boolean>(false);

  if (loadingUpload) {
    console.log(loadingUpload);
  }

  const handleLoad = () => {
    setLoading(false);
  };

  const handleStartLoad = () => {
    setLoading(true);
  };

  const handleStartUpload = () => {
    setUploading(true);
  };

  const handleStopUpload = () => {
    setUploading(false);
  };

  return (
    <LoaderContext.Provider
      value={{
        loading,
        loadingUpload,
        handleLoad,
        handleStartLoad,
        handleStartUpload,
        handleStopUpload,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

//hooks exportation
// eslint-disable-next-line react-refresh/only-export-components
export const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within an AppProvider");
  }
  return context;
};
