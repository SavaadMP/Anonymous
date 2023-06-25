import "./Faq.scss";
import Accordian from "../Accordian/Accordian";
import FaqData from "../../data/FaqData";

const Faq = () => {
  return (
    <div className="faq_container">
      <div className="section_heading">
        <h1>Frequently Asked Questions!!.</h1>
        <hr />
      </div>

      <div className="faq_content">
        {FaqData?.map((item) => {
          return <Accordian key={item.id} accordianData={item} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
