import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navWrapper">
      <Link to="/" style={{ textDecoration: "none" }} className="CompanyName">
        Otaku-Mania
      </Link>
      <nav className="navContainer">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};
export default Navbar;
