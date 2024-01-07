const Loader = (): JSX.Element => {
  return (
    <div className="page-loader">
      <div className="page-loader__indice">
        <div className="spinner"></div>

        <div className="title mt-3">
          <h1>  chargement de la page en cours...</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
