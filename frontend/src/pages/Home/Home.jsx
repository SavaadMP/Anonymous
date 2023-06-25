import "./Home.scss";

const Home = () => {
    function changeUserID() {
        const updatedID = prompt("Enter new User ID!?")
    }

    return (
        <div className="main_container">
            <div className="main_content">
                <div className="user_details">
                    <h3>John Doe</h3>
                    <p>johndoe@gmail.com</p>

                    <h5>User ID: SM@2023</h5>

                    <div className="buttons">
                        <button onClick={changeUserID}>Change User ID</button>
                        <button>Change Username</button>
                        <button>Logout</button>
                    </div>
                </div>

                <div className="send_message">
                    <form>
                        <div className="input-group">
                            <input type="text" name="userId" placeholder="Enter User ID"/>
                            <textarea type="message" name="message" rows={10} cols={30}/>

                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Home;
