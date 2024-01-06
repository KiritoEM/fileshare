import { ref, uploadBytes } from "firebase/storage";
import { fileStorage } from "../config/firebase-config";
import { v4 } from "uuid";

export default function uploadFileHelper() {
  const verifySize = (size: number) => {
    const maxSize = 500 * 1024 * 1024; //500mb maximum
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

  const uploadFile = (file: File) => {
    const fileRef = ref(fileStorage, `files_uploaded/${v4()}`);
    uploadBytes(fileRef, file);
  };

  return { verifySize, formatFileSize, uploadFile };
}
