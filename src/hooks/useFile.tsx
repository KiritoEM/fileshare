import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { useLoader } from "./useLoader";

interface IfileData {
  name: string;
  size: number;
  type?: string;
  url: string;
}

export interface IFileContext {
  file: File | null;
  fileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fileArray: IfileData[];
}

interface IFileProvider {
  children?: ReactNode;
}

const FileContext = createContext<IFileContext | null>(null);

export const FileProvider: React.FC<IFileProvider> = ({ children }) => {
  const { handleLoad } = useLoader();
  const [file, setFile] = useState<File | null>(null);
  const [fileArray, setFiles] = useState<IfileData[]>([]);
  const storage = getStorage();
  const storageRef = ref(storage, "files_uploaded");

  if (fileArray) {
    console.log("fichier récupéré :", fileArray);
  }

  const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchFiles = useCallback(async () => {
    try {
      const result = await listAll(storageRef);
      const filePromises = result.items.map(async (item) => {
        const metadata = await getMetadata(item);
        const fileSize = metadata.size;
        const fileType = metadata.contentType;
        const fileName = item.name;
        const url = await getDownloadURL(item);
        return { name: fileName, size: fileSize, type: fileType, url: url };
      });

      const filesData = await Promise.all(filePromises);
      handleLoad();
      setFiles(filesData);
    } catch (error) {
      console.error("Erreur lors de la récupération des fichiers :", error);
    }
  }, [storageRef]);

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <FileContext.Provider
      value={{
        file,
        fileChange,
        fileArray,
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
