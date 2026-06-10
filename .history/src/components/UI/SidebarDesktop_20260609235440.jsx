import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navlogo from '../../assets/logo.png';
import { useState } from "react";
import { Navigate, useHistory } from "react-router-dom";

const SidebarDesktop = () => {
    const  [isLoggedIn, setIsLoggedIn] = useState(true);
    const history = useHistory();

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    const handleLogin = () => {
        history.push('/login');
    }

    return (
        <div className="sidebar-desktop">
            <div className="sidebar__logo">
                <img src={Navlogo} alt="Logo" className="nav__img nav__img--mask" />
            </div>
            <div className="sidebar__wrapper">
                <div className="sidebar__top">
                    <a className="sidebar__link--wrapper" href="/for-you">
                        <div className="sidebar__link--line active--tab"></div>
                        <div className="sidebar__icon--wrapper">
                            <FontAwesomeIcon icon="house" />
                        </div>
                        <div className="sidebar__link--text">For you</div>
                    </a>
                    <a className="sidebar__link--wrapper" href="/library">
                        <div className="sidebar__link--line"></div>
                        <div className="sidebar__icon--wrapper">
                            <FontAwesomeIcon icon="bookmark" />
                        </div>
                        <div className="sidebar__link--text">My Library</div>
                    </a>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                        <div className="sidebar__link--line active--tab"></div>
                        <div className="sidebar__icon--wrapper">
                            <FontAwesomeIcon icon="pen-clip" />
                        </div>
                        <div className="sidebar__link--text">Highlights</div>
                    </div>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                        <div className="sidebar__link--line"></div>
                        <div className="sidebar__icon--wrapper">
                            <FontAwesomeIcon icon="magnifying-glass" />
                        </div>
                        <div className="sidebar__link--text">Search</div>
                    </div>
                </div>
                <div className="sidebar__bottom">
                    <a className="sidebar__link--wrapper" href="/settings">
                        <div className="sidebar__link--line"></div>
                        <div className="sidebar__icon--wrapper">
                            <FontAwesomeIcon icon="gear" />
                        </div>
                        <div className="sidebar__link--text">Settings</div>
                    </a>
                    <div className="sidebar__link--wrapper sidebar__link--not-allowed">
                        <div className="sidebar__link--line"></div>
                        <div className="sidebar__icon--wrapper">
                            <FontAwesomeIcon icon="circlequestion" />
                        </div>
                        <div className="sidebar__link--text">Help & Support</div>
                    </div>
                    {isLoggedIn ? (
                    <div className="sidebar__link--wrapper" onClick={handleLogout}>
                        <div className="sidebar__link--line"></div>
                        <div className="sidebar__icon--wrapper">
                            <FontAwesomeIcon icon="arrowrightfrombracket" />
                        </div>
                        <div className="sidebar__link--text">Lo</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarDesktop;