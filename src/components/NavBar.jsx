import Logo from "../assets/LogoHP.png";
import { Link } from "react-router-dom";
import "../components/NavBar.css";

function NavBar() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={Logo} className="Logo1" alt="LogoTest" />
        </Link>
        <ul className="head-menu">
          <Link to="/">
            <li> Home </li>
          </Link>
          <Link to="/GalleryAPI">
            <li> Gallery </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
