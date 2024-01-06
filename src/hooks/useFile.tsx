import React, { ReactNode, createContext, useContext, useState } from "react";

export interface IFileContext {
  file: File | null;
  fileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formatFileSize: (size: number) => string;
  verifySize: (size: number) => boolean;
}

interface IFileProvider {
  children?: ReactNode;
}

const FileContext = createContext<IFileContext | null>(null);

export const FileProvider: React.FC<IFileProvider> = ({ children }) => {
  const [file, setFile] = useState<File | null>(null);

  if (file) {
    console.log("fichier uploadé :", file);
  }

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const verifySize = (size: number) => {
    const maxSize = 500 * 1024 * 1024;
    if (size > maxSize) {
      alert("La taille du fichier ne doit pas dépassée la limite de 500 MB");
      return false;
    } else {
      return true;
    }
  };

  const formatFileSize = (size: number): string => {
    if (size < 1024) {
      return size + " B";
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + " KB";
    } else {
      return (size / (1024 * 1024)).toFixed(2) + " MB";
    }
  };

  return (
    <FileContext.Provider
      value={{
        file,
        fileChange,
        formatFileSize,
        verifySize,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

//hooks exportation
// eslint-disable-next-line react-refresh/only-export-components
export const useFile = () => {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error("useFile must be used within an AppProvider");
  }
  return context;
};
