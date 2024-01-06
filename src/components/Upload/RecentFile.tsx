const RecentFile = (): JSX.Element => {
  return (
    <section id="recent-file">
      <div id="recent-file__header">
        <div className="title">
          <h4>Fichiers récents</h4>
        </div>
        <div className="line_after"></div>
      </div>
      <div id="recent-file__container"></div>
    </section>
  );
};

export default RecentFile;
