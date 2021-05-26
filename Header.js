import React from 'react'
import './Header.css' 
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
    return (
        <div className="header">
            {/* <h1> This is the Header </h1> */}
        <div className="header__left">
                <img src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt=""></img>
            {/* <LinkedInIcon></LinkedInIcon> */}
            <div className="header__search">
                <SearchIcon className="header__search__icon"></SearchIcon>
                <input type="text" placeholder="Search"></input>
            </div> 
        </div>
        <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
                <HeaderOption Icon={SupervisorAccountIcon } title="My Network"></HeaderOption>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
                <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQGTtTW2Dt9g_w/profile-displayphoto-shrink_100_100/0/1581737381477?e=1627516800&v=beta&t=D7W-Aiz_BBmsHE3rylwd42q5E2kELzwQP-1_t_G7y4I" title="me"></HeaderOption>
        </div>
        </div>
    )
}

export default Header
