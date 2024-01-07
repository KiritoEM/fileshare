import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Itoogle {
  toogle: () => void;
}

const MenuIcons: React.FC<Itoogle> = ({ toogle }): JSX.Element => {
  return (
    <div className="menu-icon d-lg-none">
      <FontAwesomeIcon
        icon={faBars}
        className="icon"
        onClick={() => toogle()}
      />
    </div>
  );
};

export default MenuIcons;
