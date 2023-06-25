import {useState} from "react";
import "./Accordian.scss";

const Accordian = ({accordianData}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq_group">
            <div className="faq_qns" onClick={() => setIsOpen(!isOpen)}>
                <h2>
                    Q{accordianData.id + 1}: {accordianData.title}
                </h2>
                <h1>
                    <i className="bx bx-plus"></i>
                </h1>
            </div>
            {isOpen && (
                <div className="faq_ans">
                    <p>{accordianData.description}</p>
                </div>
            )}
        </div>
    );
};

export default Accordian;
