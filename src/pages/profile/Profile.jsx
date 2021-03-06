import './profile.css';
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

const Profile = () => {
    return (
        <div>
            <>
                <Topbar />
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img src="/assets/post/3.jpeg"
                                    className='profileCoverImg' alt="" />
                                <img src="/assets/person/7.jpeg" alt=""
                                    className='profileUserImg'
                                />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Tipu Chowdhury</h4>
                                <span className="profileInfoDesc">Hello My friends</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed />
                            <Rightbar profile />
                        </div>
                    </div>

                </div>

            </>
        </div>
    )
}

export default Profile