import React, { useState } from 'react';
import '../css/topbar.css';
import '../css/sidebar.css';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function SideBar() {
    const [home, selectHome] = useState(true);
    const [trending, selectTrending] = useState(false);
    const [subscriptions, selectSubscriptions] = useState(false);
    const [library, selectLibrary] = useState(false);

    function homeClicked() {
        selectHome(true);
        selectTrending(false);
        selectSubscriptions(false);
        selectLibrary(false);
    }
    function trendingClicked() {
        selectHome(false);
        selectTrending(true);
        selectSubscriptions(false);
        selectLibrary(false);
    }
    function subscriptionsClicked() {
        selectHome(false);
        selectTrending(false);
        selectSubscriptions(true);
        selectLibrary(false);
    }
    function libraryClicked() {
        selectHome(false);
        selectTrending(false);
        selectSubscriptions(false);
        selectLibrary(true);
    }

    return (
        <div className="sidebar">
            {home && <div className="box" onClick={homeClicked}>
                <HomeIcon className="sideicon-selected"
                    style={{ fontSize: 24 }} />
                <span className="boxtext-selected">Home</span>
            </div>}
            {!home && <div className="box" onClick={homeClicked}>
                <HomeIcon className="sideicons"
                    style={{ fontSize: 24 }} />
                <span className="boxtext">Home</span>
            </div>}


            {trending && <div className="box" onClick={trendingClicked}>
                <WhatshotIcon className="sideicon-selected"
                    style={{ fontSize: 24 }} />
                <span className="boxtext-selected">Trending</span>
            </div>}
            {!trending && <div className="box" onClick={trendingClicked}>
                <WhatshotIcon className="sideicons"
                    style={{ fontSize: 24 }} />
                <span className="boxtext">Trending</span>
            </div>}


            {subscriptions && <div className="box" onClick={subscriptionsClicked}>
                <SubscriptionsIcon className="sideicon-selected"
                    style={{ fontSize: 24 }} />
                <span className="boxtext-selected">Subscriptions</span>
            </div>}
            {!subscriptions && <div className="box" onClick={subscriptionsClicked}>
                <SubscriptionsIcon className="sideicons"
                    style={{ fontSize: 24 }} />
                <span className="boxtext">Subscriptions</span>
            </div>}


            {library && <div className="box" onClick={libraryClicked}>
                <VideoLibraryIcon className="sideicon-selected"
                    style={{ fontSize: 24 }} />
                <span className="boxtext-selected">Library</span>
            </div>}
            {!library && <div className="box" onClick={libraryClicked}>
                <VideoLibraryIcon className="sideicons"
                    style={{ fontSize: 24 }} />
                <span className="boxtext">Library</span>
            </div>}
        </div>
    );
}

export default SideBar;
