import { useLogout } from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import "./UserDetails.scss";

const UserDetails = () => {
  const { logout } = useLogout();
  const { user } = useSelector((state) => state.user);
  const logoutAcc = () => {
    logout();
  };

  return (
    <div className="user_details">
      <h3>{user.username}</h3>
      <p>{user.email}</p>

      <h5>User ID: {user.usercode}</h5>

      <div className="buttons">
        <button>Change User ID</button>
        <button>Change Username</button>
        <button onClick={logoutAcc}>Logout</button>
      </div>
    </div>
  );
};

export default UserDetails;
