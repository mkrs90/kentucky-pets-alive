import { Link } from "react-router-dom";
import logo from "../images/Logos/KPA_Colored_Logo.png";

function NavBar() {
  return (
    <div className="container-fluid text-center pb-3" id="navBar">
      <div className="pt-1">
        <img id="nav_logo" src={logo} alt="KPA logo" />
      </div>
      <div>
        <Link to="/" id="nav_title" className="navbar-brand">
          Kentucky Pets Alive
        </Link>
        <h1 className="navSubText">Every. Life. Matters</h1>
      </div>
      <nav>
        <div className="d-flex justify-content-center">
          <ul className="nav mt-4">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link to="/" className="nav-link">
                Adopt A Pet
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link to="/" className="nav-link">
                Volunteer
              </Link>
            </li>
            <li className="nav-item ms-5">
              <Link to="/" className="nav-link">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
