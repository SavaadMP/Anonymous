import "./Hero.scss";
import {Link, useNavigate} from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    // * Give enough information to the users
    function guestAlert() {
        const response = confirm(
            "If you are login as guest!!, you won't get reply from anyone you message"
        );

        if (response == true) {
            navigate("/");
        } else {
            return null;
        }
    }

    return (
        <>
            <section className="hero_container">
                <div className="hero_content">
                    <div className="heading">
                        <h1>Send Message Anonymously ✨</h1>
                    </div>
                    <div className="subheading">
                        <p>
                            Introducing our revolutionary website, designed to empower you
                            with the freedom to express yourself openly and anonymously.We
                            understand that sometimes, sharing thoughts, opinions, or seeking
                            advice requires a safe and judgment-free environment
                        </p>
                    </div>
                    <div className="btn-group">
                        <Link className="btn" to="/login">
                            Login
                        </Link>
                        <button onClick={guestAlert} className="btn">
                            Login as Guest
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
