const UploadArea = (): JSX.Element => {
  return (
    <section id="upload-area">
      <div className="cloud-img">
        <img src="/cloud.png" alt="" />
      </div>
      <div className="label">
        <p>Veuillez séléctionnez un fichier à sauvegarder</p>
      </div>
      <div className="button">
        <button className="btn">Ajouter un fichier</button>
      </div>
    </section>
  );
};

export default UploadArea;
