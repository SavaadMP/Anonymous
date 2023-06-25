import "./Welcome.scss";
import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";

const Welcome = () => {
    return (
        <div className="hero_container">
            <Hero/>
            <About/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Welcome;
