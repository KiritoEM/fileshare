import FileCard from "../ChildrenComponents/FileCard";
import { useFile } from "../../hooks/useFile";
import uploadFileHelper from "../../helper/uploadFile.helper";
import getExtension from "../../util/getExtension";
import getAuthor from "../../util/getAuthor";

const RecentFile = (): JSX.Element => {
  const { fileArray } = useFile();
  const displayedFiles = fileArray.slice(0, 5).reverse();
  const { formatFileSize } = uploadFileHelper();
  const { getFileExtension } = getExtension();
  const { getAuthorName } = getAuthor();

  return (
    <section id="recent-file">
      <div id="recent-file__header">
        <div className="title">
          <h4>Fichiers récents dans le Cloud</h4>
        </div>
        <div className="line_after"></div>
      </div>
      {displayedFiles.length === 0 ? (
        <h5 className="mt-3 vide">Aucun fichier partagé pour le moment</h5>
      ) : (
        <div id="recent-file__container">
          <div className="row gx-4 gy-4">
            {displayedFiles.map((item, fileIndex) => (
              <div className="col-md-4" key={fileIndex}>
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
      {displayedFiles.length !== 0 && (
        <div className="all-files">
          <a href="/All-file">
            <button className="btn">Tous les fichiers</button>
          </a>
        </div>
      )}
    </section>
  );
};

export default RecentFile;
