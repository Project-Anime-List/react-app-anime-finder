import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <nav>
        <Link to="/">🏠</Link>
      </nav>
    </div>
  );
};
export default Footer;
