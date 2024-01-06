import navbar from "../../helper/data/navbar";

const AppHeader = (): JSX.Element => {
  const { navItems } = navbar();
  return (
    <section className="upload-header">
      <div className="logo">
        <img src="/logo.png" alt="" />
      </div>
      <div className="menu-items">
        <ul>
          {navItems.map((item, Navindex) => (
            <li key={Navindex}>
              <a
                href={item.url}
                id={window.location.pathname === item.url ? "active" : ""}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="button">
        <button className="btn">Se déconnecter</button>
      </div>
    </section>
  );
};

export default AppHeader;
