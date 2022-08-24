import "./Welcome.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navwrapper">
      <ul className="navigation">
        <li className="nav">
          <Link to={"/"} className="navlink">
            HOME BROK
          </Link>
        </li>
        <li className="nav">
          <Link to={"/about"} className="navlink">
            ABOUT BROK
          </Link>
        </li>
        <li className="nav">
          <Link to={"/profile"} className="navlink">
            PROFILE
          </Link>
        </li>
        <li className="nav">
          <Link to={"/profile/person"} className="navlink">
            PERSON
          </Link>
          <Outlet />
        </li>
        <li className="nav">
          <Link to={"/Blog"} className="navlink">
            BLOG
          </Link>
          <Outlet />
        </li>
        <li className="nav">
          <Link to={"/login"} className="navlink">
            LOGIN
          </Link>
          <Outlet />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
