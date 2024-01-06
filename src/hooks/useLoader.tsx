import React, { ReactNode, createContext, useContext, useState } from "react";

export interface ILoaderContext {
  loading: boolean;
  handleLoad: () => void;
}

interface ILoaderProvider {
  children?: ReactNode;
}

const LoaderContext = createContext<ILoaderContext | null>(null);

export const LoaderProvider: React.FC<ILoaderProvider> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <LoaderContext.Provider
      value={{
        loading,
        handleLoad,
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
