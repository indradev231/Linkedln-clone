import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">

            <div className="header__left">
                <img 
                    src="./assets/images/linkedin-logo.png"
                    alt="" 
                />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="MyNetwork" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption 
                    // avatar="./assets/images/linkedin-avatar.jpeg"
                    // avatar={user.photoUrl} 
                    avatar={true}
                    title="Me" 
                    onClick={logoutOfApp}/>
                {/* <HeaderOption Icon={AccountCircleIcon} title="me" /> */}
            </div>

        </div>
    )
}

export default Header
