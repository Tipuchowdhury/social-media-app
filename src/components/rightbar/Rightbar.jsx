import React from 'react';
import "./rightbar.css";
import { Users } from '../../dummyData';
import Online from '../onlineFriend/Online';


export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="rigthbarBirthday">
                    <img className='rightbarBirthdayImage' src="/assets/gift.png" alt="" />
                    <span className="birthdayText"><b className='rightbarBirthdayPeople'>Pola Foster</b> and <b className='rightbarBirthdayPeople'>3 other friends </b>have a birthday today.</span>
                </div>
                <img className='rightbarAdImage' src="/assets/ad.png" alt="" />
                <span className="rightbarOnlineFriends">Online Friends</span>
                {Users.map((u) => (
                    <Online key={u.id} users={u} />
                ))}
            </>
        )

    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Chittagogn</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Chittagogn</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Frineds</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/6.jpeg" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
