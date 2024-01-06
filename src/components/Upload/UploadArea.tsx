import { useState } from "react";

const UploadArea = (): JSX.Element => {
  const [clicked, setCLicked] = useState<boolean>(false);
  return (
    <section id="upload-area">
      <div className="cloud-img">
        <img src="/cloud.png" alt="" />
      </div>
      <div className="label">
        <p>Veuillez séléctionnez un fichier à sauvegarder</p>
      </div>
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
