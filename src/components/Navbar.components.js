import "./Welcome.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navwrapper">
      <ul className="navigation">
        <li class="nav">
          <Link to={"/"} className="navlink">
            HOME BROK
          </Link>
        </li>
        <li class="nav">
          <Link to={"/about"} className="navlink">
            ABOUT BROK
          </Link>
        </li>
        <li class="nav">
          <Link to={"/profile"} className="navlink">
            PROFILE
          </Link>
        </li>
        <li class="nav">
          <Link to={"/profile/person"} className="navlink">
            PERSON
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
