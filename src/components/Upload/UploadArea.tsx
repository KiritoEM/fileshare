import { Fragment, useState } from "react";
import FilePreviewCard from "../ChildrenComponents/FilePreviewCard";

const UploadArea = (): JSX.Element => {
  const [clicked, setCLicked] = useState<boolean>(false);
  return (
    <section id="upload-area">
      {clicked === false ? (
        <Fragment>
          <div className="cloud-img">
            <img src="/cloud.png" alt="" />
          </div>
          <div className="label">
            <p>Veuillez séléctionnez un fichier à sauvegarder</p>
          </div>
        </Fragment>
      ) : (
        <div className="file-preview__container">
          <FilePreviewCard />
        </div>
      )}

      {clicked === false ? (
        <div className="button" onClick={() => setCLicked(true)}>
          <button className="btn">Séléctionner un fichier</button>
        </div>
      ) : (
        <div className="button">
          <button className="btn">Uploader le fichier</button>
        </div>
      )}
    </section>
  );
};

export default UploadArea;
