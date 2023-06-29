import "./Auth.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useLogin();

  const loginAcc = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <section className="auth_container">
      <div className="auth_content">
        <div className="brand_auth">
          <form onSubmit={loginAcc}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eg: johndoe@gmail.com"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password Should be Strong"
                name="password"
                id="password"
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
              <input type="submit" value="Login" />
            </div>
            <div className="form-group auth_type">
              <p>
                Don't have an account yet!?{" "}
                <Link to="/register">Register.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
