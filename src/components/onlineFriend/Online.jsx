import './online.css';

const Online = ({ users }) => {
    return (
        <div>
            <ul className="rightbarFriendList">
                <li className="rightbarFriend">
                    <div className="rightbarProfileImageContainer">
                        <img
                            src={users.profilePicture} alt=""
                            className='rightbarProfileImg' />
                        <span className="rightbarOnline"></span>
                    </div>
                    <span className="rightbarUsername">{users.username}</span>
                </li>
            </ul>
        </div>
    )
}

export default Online