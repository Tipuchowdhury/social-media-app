import React from 'react';
import { Notifications, Person, Search, Chat } from '@mui/icons-material';
import './topbar.css';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">mySocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchbarIcon' />
                    <input placeholder='Search for friend, port or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <Link to="/" className='linkProfile'>
                        <span className="topbarlinks">Homepage</span>
                    </Link>
                    <Link to="/profile" className='linkProfile'>
                        <span className="topbarlinks">Timeline</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
                </div>

            </div>

        </div>
    )
}
