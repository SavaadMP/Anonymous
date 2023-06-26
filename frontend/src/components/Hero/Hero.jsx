import "./Hero.scss";
import {Link} from "react-router-dom";

const Hero = () => {
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
                        <Link to="/sendMessage" className="btn">
                            Send Message
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
