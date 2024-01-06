export default function getAuthor() {
  const getAuthorName = (fileName: string) => {
    const authorName = fileName.split("_")[0];

    return authorName;
  };
  return { getAuthorName };
}
