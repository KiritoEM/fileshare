export default function getExtension() {
  const getFileExtension = (fileName: string) => {
    const lastDotIndex = fileName.lastIndexOf(".");
    return lastDotIndex !== -1 ? fileName.slice(lastDotIndex + 1) : "";
  };

  return { getFileExtension };
}
