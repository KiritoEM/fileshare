import FileCard from "../ChildrenComponents/FileCard";
import { useFile } from "../../hooks/useFile";
import uploadFileHelper from "../../helper/uploadFile.helper";
import getExtension from "../../util/getExtension";

const RecentFile = (): JSX.Element => {
  const { fileArray } = useFile();
  const { formatFileSize } = uploadFileHelper();
  const { getFileExtension } = getExtension();

  return (
    <section id="recent-file">
      <div id="recent-file__header">
        <div className="title">
          <h4>Fichiers récents</h4>
        </div>
        <div className="line_after"></div>
      </div>
      <div id="recent-file__container">
        <div className="row gx-4 gy-4">
          {fileArray.map((item, fileIndex) => (
            <div className="col-4" key={fileIndex}>
              <FileCard
                key={fileIndex}
                name={item.name}
                size={formatFileSize(item.size)}
                extension={getFileExtension(item.name)}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="all-files">
        <button className="btn">Tous les fichiers</button>
      </div>
    </section>
  );
};

export default RecentFile;
