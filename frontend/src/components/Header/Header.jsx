import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";
import { useLogout } from "../../hooks/useLogout";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useSelector((state) => state.user);
  const logoutAcc = () => {
    logout();
  };

  return (
    <header>
      <div className="brand_logo">
        <Link to="/">🎭 Anonymous</Link>
      </div>

      <div className="getStarted">
        {user ? (
          <Link onClick={logoutAcc} to="/welcome">
            Logout
          </Link>
        ) : (
          <Link to="/register">Get Started</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
