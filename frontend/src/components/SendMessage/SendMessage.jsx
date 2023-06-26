import "./SendMessage.scss"

const SendMessage = () => {
    return (
        <div className="send_message">
            <form>
                <div className="input-group">
                    <input type="text" name="userId" placeholder="Enter User ID"/>
                    <textarea type="message" name="message" rows={10} cols={30}/>

                    <button>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage