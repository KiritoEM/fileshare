import uploadFileHelper from "../../helper/uploadFile.helper";
import { useFile } from "../../hooks/useFile";
import getAuthor from "../../util/getAuthor";
import getExtension from "../../util/getExtension";
import FileCard from "../ChildrenComponents/FileCard";

const AllfilesContent = (): JSX.Element => {
  const { fileArray } = useFile();
  const { formatFileSize } = uploadFileHelper();
  const { getFileExtension } = getExtension();
  const { getAuthorName } = getAuthor();

  return (
    <section id="allFile-page__content">
      <div className="section-header">
        <div className="title">
          <h4>Tous les fichiers</h4>
        </div>
        <div className="line_after">
          <div className="line-container"></div>
        </div>
      </div>
      {fileArray.length === 0 ? (
        <h5 className="mt-3 vide">Aucun fichier partagé pour le moment</h5>
      ) : (
        <div className="section-container">
          <div className="row gx-4 gy-4">
            {fileArray.map((item, fileIndex) => (
              <div className="col-md-6 col-lg-4" key={fileIndex}>
                <FileCard
                  key={fileIndex}
                  name={item.name}
                  size={formatFileSize(item.size)}
                  extension={getFileExtension(item.name)}
                  url={item.url}
                  author={getAuthorName(item.name)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AllfilesContent;
