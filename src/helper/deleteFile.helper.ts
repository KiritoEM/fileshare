import { getStorage, ref, deleteObject } from "firebase/storage";

export default function deleteFileHelper() {
  const storage = getStorage();

  const deleteFile = async (name: string) => {
    try {
      const storageRef = ref(storage, `files_uploaded/${name}`);
      await deleteObject(storageRef)
        .then(() => {
          console.log("fichier effacé avec succés");
        })
        .catch((err: string) => {
          console.log("erreur lors de la suppression", err);
        });
    } catch (error) {
      console.error(
        "Erreur lors de la suppression du fichier depuis Firebase Storage :",
        error
      );
    }
  };

  return { deleteFile };
}
