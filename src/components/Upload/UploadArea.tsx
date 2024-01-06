import { Fragment, useEffect, useState } from "react";
import FilePreviewCard from "../ChildrenComponents/FilePreviewCard";
import { useFile } from "../../hooks/useFile";

const UploadArea = (): JSX.Element => {
  const [clicked, setCLicked] = useState<boolean>(false);
  const { file, fileChange } = useFile();

  useEffect(() => {
    if (file) {
      setCLicked(true);
    }
  }, [file]);

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
          {file && <FilePreviewCard name={file.name} size={file.size} />}
        </div>
      )}

      {clicked === false ? (
        <div className="button">
          <label htmlFor="file-upload" className="btn">
            Séléctionner un fichier
          </label>
          <input
            type="file"
            name=""
            id="file-upload"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => fileChange(e)}
            style={{ display: "none" }}
          />
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
