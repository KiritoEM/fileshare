import React from "react";
import downloadfilehelper from "../../helper/downloadFile.helper";
import deleteFileHelper from "../../helper/deleteFile.helper";

interface IfileInfo {
  name: string;
  size: string;
  extension: string;
  url: string;
}

const FileCard: React.FC<IfileInfo> = ({
  name,
  size,
  extension,
  url,
}): JSX.Element => {
  const { downloadFile } = downloadfilehelper();
  const { deleteFile } = deleteFileHelper();
  return (
    <article className="file-card">
      <div className="title">
        <h6>{name}</h6>
      </div>
      <div className="size">
        <h6>
          <span>Taille :</span> {size}
        </h6>
      </div>
      <div className="extension">
        <h6>
          <span>Extension :</span> .{extension}
        </h6>
      </div>
      <div className="buttons">
        <div className="delete-btn" onClick={() => deleteFile(name)}>
          <button className="btn btn-danger">
            <div className="trash-icon">
              <img src="/trash.png" alt="" />
            </div>
            <div className="label">
              <p>Supprimer</p>
            </div>
          </button>
        </div>
        <div className="download-btn">
          <button className="btn" onClick={() => downloadFile(name, url)}>
            <div className="trash-icon">
              <img src="/download.png" alt="" />
            </div>
            <div className="label">
              <p>Télécharger</p>
            </div>
          </button>
        </div>
      </div>
    </article>
  );
};

export default FileCard;
