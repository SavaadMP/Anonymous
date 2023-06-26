import "./Message.scss"
import {useState} from "react";

const Message = () => {
    const [showOptions, SetShowOptions] = useState(false)

    return (
        <div className="message">
            <p>Introducing our revolutionary website, designed to empower you with the freedom to express yourself
                openly and anonymously.We understand that sometimes, sharing thoughts, opinions, or seeking advice
                requires a safe and judgment-free environment</p>
            <p>Anonymous - 06/26/2023 9:20</p>

            <div className="more_options">
                <button
                    onClick={() => SetShowOptions(!showOptions)}>{showOptions ? "Hide More Options >>" : "More Options >>"} </button>
                {showOptions && (
                    <>
                        <button>Take Screenshot</button>
                        <button>Mark as Read</button>
                        <button>Delete</button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Message