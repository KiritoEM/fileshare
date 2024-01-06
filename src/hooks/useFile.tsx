import React, { ReactNode, createContext, useContext, useState } from "react";

export interface IFileContext {
  file: File | null;
  fileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IFileProvider {
  children?: ReactNode;
}

const FileContext = createContext<IFileContext | null>(null);

export const FileProvider: React.FC<IFileProvider> = ({ children }) => {
  const [file, setFile] = useState<File | null>(null);

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <FileContext.Provider
      value={{
        file,
        fileChange,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

//hooks exportation
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFirebase must be used within an AppProvider");
  }
  return context;
};
