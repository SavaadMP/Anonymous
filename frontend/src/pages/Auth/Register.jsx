import "./Auth.scss";
import {Link} from "react-router-dom";

const Register = () => {
    function showUniqueIdInfo() {
        alert("It Should Be Unique, This Id Will Use For Other Users To Message You. So Make Sure That It Is Not Easily Accesible Thanks!! 💖");
    }

    return (<section className="auth_container">
        <div className="auth_content">
            <div className="brand_details">
                <h1>
                    {/* Why <span>🎭 Anonymous !?</span> */}
                    Start your journey with us
                </h1>

                <ul>
                    <li>Ensures Privacy</li>
                    <li>Safe and Secure</li>
                    <li>24x7 Support</li>
                    <li>Easy to use</li>
                </ul>

                <div className="copy">
                    <span>🎭 Anonymous</span>
                </div>
            </div>

            <div className="brand_auth">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="eg: John Doe"
                            id="username"
                        />
                    </div>
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
                    <div className="form-group">
                        <label htmlFor="randomId" className="uniqueId">
                            Unique ID:{" "}
                            <span onClick={showUniqueIdInfo}>
                  <i className="bx bx-info-circle"></i>
                </span>
                        </label>
                        <input
                            type="text"
                            placeholder="eg: JD2023"
                            name="randomId"
                            id="randomId"
                        />
                    </div>
                    <div className="form-group submit_btn">
                        <label>
                            By proceeding you confirm that you are agree to the Privacy and
                            Policy & terms of use.
                        </label>
                        <input type="button" value="Register"/>
                    </div>
                    <div className="form-group auth_type">
                        <p>
                            Already have an account!? <Link to="/login">Login.</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>);
};

export default Register;
