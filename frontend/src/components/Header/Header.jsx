import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="brand_logo">
        <Link to="/">🎭 Anonymous</Link>
      </div>

      <div className="getStarted">
        <Link to="/register">Get Started</Link>
      </div>
    </header>
  );
};

export default Header;
