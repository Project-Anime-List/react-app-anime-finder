import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navWrapper">
      <Link to="/" style={{ textDecoration: "none" }} className="CompanyName">
        Otaku-Mania
      </Link>
      <nav className="navContainer">
        {/* <div className="nav"> */}
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
        {/* </div> */}
      </nav>
    </div>
  );
};
export default Navbar;
