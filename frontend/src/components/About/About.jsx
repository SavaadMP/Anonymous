import "./About.scss";

const About = () => {
  return (
    <div className="about_section">
      <div className=" section_heading">
        <h1>What's 🎭 Anonymous!?</h1>
        <hr />
      </div>
      <div className="about_content">
        <div className="left">
          <img src="/mockuper.png" alt="" />
        </div>

        <div className="right">
          <div className="para">
            <p>
              With our platform, you can communicate freely, unencumbered by
              social norms or personal biases. Whether you want to vent, discuss
              sensitive topics, or connect with like-minded individuals,
              🎭Anonymous offers a secure space where your identity remains
              completely anonymous. Share your stories, exchange ideas, and find
              solace in the knowledge that your privacy is protected. Join our
              vibrant community, where authenticity and anonymity intersect to
              foster genuine conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
