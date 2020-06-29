import React from 'react';
import '../css/topbar.css';
import logo from '../assets/youtubelogo.png';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function TopBar() {

    function youtubeHome() {
        console.log("youtube home");
    }

    return (
        <div className="bar">
            <div className="barleft">
                <MenuIcon className="iconmui"
                    style={{ fontSize: 24 }} />
                <img className="logo" src={logo} alt="YouTube Home" onClick={youtubeHome} />
            </div>

            <div className="barmiddle">
                <input className="searchbar" placeholder="Search" spellCheck="false" />
                <div className="searchicon">
                    <SearchIcon className="searchiconmui" />
                </div>
                {/* <Input 
                    className="searchbar"
                    icon={{ name: 'search', circular: true, link: true }}
                    placeholder='Search'
                /> */}
            </div>

            <div className="barright">
                <VideoCallIcon className="iconmui"
                    style={{ fontSize: 26 }} />
                <AppsIcon className="iconmui"
                    style={{ fontSize: 26 }} />
                <NotificationsIcon className="iconmui"
                    style={{ fontSize: 26 }} />
                <AccountCircleIcon className="iconmui"
                    style={{ fontSize: 26 }} />
            </div>
        </div>
    );
}

export default TopBar;
