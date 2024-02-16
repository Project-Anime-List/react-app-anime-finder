import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navWrapper">
      <nav className="navContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Otaku-Mania</p>
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
