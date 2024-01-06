import RecentFileCard from "../ChildrenComponents/RecentFileCard";

const RecentFile = (): JSX.Element => {
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
          <div className="col-4">
            <RecentFileCard />
          </div>
          <div className="col-4">
            <RecentFileCard />
          </div>
          <div className="col-4">
            <RecentFileCard />
          </div>
          <div className="col-4">
            <RecentFileCard />
          </div>
        </div>
      </div>
      <div className="all-files">
        <button className="btn">
           Tous les fichiers
        </button>
      </div>
    </section>
  );
};

export default RecentFile;
