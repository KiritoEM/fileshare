import { Fragment } from "react";

interface Ioverlay {
  overlay: boolean;
}

const Overlay: React.FC<Ioverlay> = ({ overlay }): JSX.Element => {
  return <Fragment>{overlay && <div className="overlay d-lg-none"></div>}</Fragment>;
};

export default Overlay;
