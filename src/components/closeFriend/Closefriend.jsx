import './Closefriend.css';

const Closefriend = ({ users }) => {
    return (
        <div>
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src={users.profilePicture} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">{users.username}</span>
                </li>
            </ul>
        </div>
    )
}

export default Closefriend;