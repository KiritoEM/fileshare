import { Fragment } from "react";
import navbar from "../../helper/data/navbar";
import { useAuth } from "../../hooks/useAuth";
import HeaderReponsive from "./HeaderReponsive";
import MenuIcons from "./MenuIcons";
import { useNav } from "../../hooks/useNav";
import Overlay from "./Overlay";

const AppHeader = (): JSX.Element => {
  const { setLogout } = useAuth();
  const { navItems } = navbar();
  const { menuToogle, openOverlay } = useNav();

  return (
    <Fragment>
      <section className="upload-header">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
        <div className="menu-items d-none d-lg-flex">
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
        <div className="button d-none d-lg-flex" onClick={() => setLogout()}>
          <a href="/">
            <button className="btn">Se déconnecter</button>
          </a>
        </div>
        <MenuIcons toogle={menuToogle} />
      </section>
      <HeaderReponsive />
      <Overlay overlay={openOverlay} />
    </Fragment>
  );
};

export default AppHeader;
