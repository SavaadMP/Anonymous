import "./Home.scss";
import Message from "../../components/Message/Message.jsx";
import UserDetails from "../../components/UserDetails/UserDetails.jsx";
import SendMessage from "../../components/SendMessage/SendMessage.jsx";

const Home = () => {
    return (
        <div className="main_container">
            <div className="main_content">
                <UserDetails />
                <SendMessage />
            </div>

            {/*<div className="view_messages">*/}
            {/*    <div className="messages">*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*        <Message />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
};

export default Home;
