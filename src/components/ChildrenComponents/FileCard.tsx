import React from "react";
import downloadfilehelper from "../../helper/downloadFile.helper";
import deleteFileHelper from "../../helper/deleteFile.helper";
import getEmail from "../../util/getEmail";

interface IfileInfo {
  name: string;
  size: string;
  extension: string;
  url: string;
  author: string;
}

const FileCard: React.FC<IfileInfo> = ({
  name,
  size,
  extension,
  url,
  author,
}): JSX.Element => {
  const { downloadFile } = downloadfilehelper();
  const { deleteFile } = deleteFileHelper();
  const userEmail = getEmail();
  const currentAuthor = userEmail && userEmail.split("@")[0];
  return (
    <article className="file-card">
      <div className="file-header">
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
        <div className="author">
          <h6>
            <span>Auteur :</span> {author}
          </h6>
        </div>
      </div>
      <div className="buttons">
        {currentAuthor === author && (
          <div
            className="delete-btn"
            onClick={() => {
              window.location.reload();
              deleteFile(name);
            }}
          >
            <button className="btn btn-danger">
              <div className="trash-icon">
                <img src="/trash.png" alt="" />
              </div>
              <div className="label">
                <p>Supprimer</p>
              </div>
            </button>
          </div>
        )}

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
