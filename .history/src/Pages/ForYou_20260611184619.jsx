import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import Navlogo from "../assets/logo.png";
import Selected from "../components/UI/Selected";
import Recommended from "../components/UI/Recommended";
import Suggested from "../components/UI/Suggested";
import SidebarDesktop from "../components/UI/SidebarDesktop";

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
    <section id="_next">
      <SidebarDesktop />
      <div className="wrapper">
        <div className="search__background">
          <div className="search__wrapper">
            <div className="search__content">
              <div className="search">
                <div className="search__input--wrapper">
                  <input
                    className="search__input"
                    placeholder="Search for books"
                    type="text"
                    value=""
                  />
                  <FontAwesomeIcon
                    icon="magnifying-glass"
                    className="search__icon"
                  />
                </div>
              </div>
              <button className="sidebar__toggle--btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon="bars" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`sidebar__overlay ${isSidebarOpen ? "sidebar__overlay--visible" : "sidebar__overlay--hidden"}`}
        >
          <div
            className={`sidebar sidebar-mobile ${isSidebarOpen ? "sidebar--open" : "sidebar--closed"}`}
            ref={sidebarRef}
          >
         
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <div className="for-you__title">Selected just for you</div>
              <Selected />
              <Recommended />
              <Suggested />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;