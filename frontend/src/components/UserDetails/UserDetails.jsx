import "./UserDetails.scss"

const UserDetails = () => {
    return (
        <div className="user_details">
            <h3>John Doe</h3>
            <p>johndoe@gmail.com</p>

            <h5>User ID: SM@2023</h5>

            <div className="buttons">
                <button>Change User ID</button>
                <button>Change Username</button>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default UserDetails