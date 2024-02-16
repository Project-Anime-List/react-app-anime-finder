import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Otaku-Mania</h1>
      </Link>
    </nav>
  );
};
export default Navbar;
