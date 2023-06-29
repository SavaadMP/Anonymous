import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.scss";
import { useLogout } from "../../hooks/useLogout";

const Header = () => {
  const { logout } = useLogout();
  const { user } = useSelector((state) => state.user);
  const logoutAcc = async () => {
    logout();
  };

  return (
    <header>
      <div className="brand_logo">
        <Link to="/welcome">🎭 Anonymous</Link>
      </div>

      <div className="getStarted">
        {user ? (
          <Link onClick={logoutAcc} to="/login">
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
