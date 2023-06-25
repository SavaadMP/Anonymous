import "./Auth.scss";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="auth_container">
            <div className="auth_content">
                <div className="brand_auth">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="eg: johndoe@gmail.com"
                                id="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                placeholder="Password Should be Strong"
                                name="password"
                                id="password"
                            />
                        </div>
                        <div className="form-group submit_btn">
                            <label>
                                By proceeding you confirm that you are agree to the Privacy and
                                Policy & terms of use.
                            </label>
                            <input type="button" value="Login"/>
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
