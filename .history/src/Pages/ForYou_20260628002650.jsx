import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import Navlogo from "../assets/logo.png";
import Selected from "../components/UI/Selected";
import Recommended from "../components/UI/Recommended";
import Suggested from "../components/UI/Suggested";
import SearchInput from "../components/UI/SearchInput";

const ForYou = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  function toggleMenu() {
    setSidebarOpen((prevState) => !prevState);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`sidebar__overlay ${isSidebarOpen ? "sidebar__overlay--visible" : "sidebar__overlay--hidden"}`}
      >
        <div
          className={`sidebar sidebar-mobile ${isSidebarOpen ? "sidebar--open" : "sidebar--closed"}`}
          ref={sidebarRef}
        >
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
                  <FontAwesomeIcon icon="circle-question" />
                </div>
                <div className="sidebar__link--text">Help & Support</div>
              </div>
              <div className="sidebar__link--wrapper">
                <div className="sidebar__link--line"></div>
                <div className="sidebar__icon--wrapper">
                  <FontAwesomeIcon icon="arrow-right-from-bracket" />
                </div>
                <div className="sidebar__link--text">Logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="for-you__wrapper">
        <div className="for-you__title">Selected just for you</div>
        <Selected />
        <Recommended />
        <Suggested />
      </div>
    </>
  );
};

export default ForYou;
