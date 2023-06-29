import { useState } from "react";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import Error from "../Error/Error";

const RegisterForm = ({ brandInfo }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usercode, setUsercode] = useState("");

  const { Register, isLoading, error } = useRegister();

  const registerAcc = async (event) => {
    event.preventDefault();
    await Register(username, email, password, usercode);
  };

  return (
    <>
      <form onSubmit={registerAcc}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="eg: John Doe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="eg: johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Password Should be Strong"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="usercode" className="uniqueId">
            User code:{" "}
            <span onClick={brandInfo}>
              <i className="bx bx-info-circle"></i>
            </span>
          </label>
          <input
            type="text"
            placeholder="eg: JD2023"
            name="usercode"
            id="usercode"
            value={usercode}
            onChange={(e) => setUsercode(e.target.value)}
          />
        </div>
        {!isLoading ? (
          <div
            className="form-group error-box"
            style={{
              marginTop: "20px",
            }}
          >
            {error && <input type="button" value={error} />}
          </div>
        ) : (
          <div
            className="form-group success-box"
            style={{
              marginTop: "20px",
            }}
          >
            {isLoading && <input type="button" value="Please wait.." />}
          </div>
        )}
        <div className="form-group submit_btn">
          <label>
            By proceeding you confirm that you are agree to the Privacy and
            Policy & terms of use.
          </label>
          <input
            type="submit"
            value={isLoading ? "Please Wait.." : "Register"}
          />
        </div>
        <div className="form-group auth_type">
          <p>
            Already have an account!? <Link to="/login">Login.</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
