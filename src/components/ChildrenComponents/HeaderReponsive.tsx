import navbar from "../../helper/data/navbar";
import { useAuth } from "../../hooks/useAuth";
import { useNav } from "../../hooks/useNav";

const HeaderReponsive = (): JSX.Element => {
  const { navItems } = navbar();
  const { setLogout } = useAuth();
  const { openMenu } = useNav();

  return (
    <div
      className={`menu-items__responsive d-lg-none ${
        openMenu ? "open-menu" : "close-menu"
      }`}
    >
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
        <div className="button" onClick={() => setLogout()}>
          <a href="/">
            <button className="btn">Se déconnecter</button>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default HeaderReponsive;
