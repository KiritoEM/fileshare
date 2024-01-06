const FileCard = (): JSX.Element => {
  return (
    <article className="file-card">
      <div className="title">
        <h6>Darling in the Franxx.mp4</h6>
      </div>
      <div className="size">
        <h6>
          <span>Taille :</span> 24 mo
        </h6>
      </div>
      <div className="extension">
        <h6>
          <span>Extension :</span> mp4
        </h6>
      </div>
      <div className="date">
        <p>
          <span>Date de création :</span> 03 Janvier 2023
        </p>
      </div>
      <div className="buttons">
        <div className="delete-btn">
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
          <button className="btn">
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
