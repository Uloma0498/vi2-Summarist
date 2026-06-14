import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import Navlogo from "../assets/logo.png";
import Selected from "../components/UI/Selected";
import Recommended from "../components/UI/Recommended";
import Suggested from "../components/UI/Suggested";
import SidebarDesktop from "../components/UI/SidebarDesktop";

const BookDetails = () => {
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
            <div className="sidebar__logo">
              <img
                src={Navlogo}
                alt="Logo"
                className="nav__img nav__img--mask"
              />
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
                <div className="sidebar__link--wrapper">
                  <div className="sidebar__link--line"></div>
                  <div className="sidebar__icon--wrapper">
                    <FontAwesomeIcon icon="arrowrightfrombracket" />
                  </div>
                  <div className="sidebar__link--text">Logout</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <div className="inner__wrapper">
             <div className="inner__book">
              <div className="inner-book__title">
                How to Win Friends and Influence People in the Digital Age
              </div>
              <div className="inner-book__author">
                Dale Carnegie
              </div>
              <div className="inner-book__sub--title">
                Time-tested advice for the digital age
              </div>
              <div className="inner-book__wrapper">
                <div className="inner-book__description--wrapper">
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="star" />
                    <div className="inner-book__overall--rating">
                     4.4
                    </div>
                    <div className="inner-book__total--rating">
                     (608 ratings)
                    </div>
                  </div>
                 </div>
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="clock" />
                    <div className="inner-book__overall--rating">
                     4.4
                    </div>
                    <div className="inner-book__total--rating">
                     (608 ratings)
                    </div>
                  </div>
                 </div>
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="microphone" />
                    <div className="inner-book__overall--rating">
                     4.4
                    </div>
                    <div className="inner-book__total--rating">
                     (608 ratings)
                    </div>
                  </div>
                 </div>
                 <div className="inner-book__description">
                  <div className="inner-book__icon">
                    <FontAwesomeIcon icon="lightbulb" />
                    <div className="inner-book__overall--rating">
                     4.4
                    </div>
                    <div className="inner-book__total--rating">
                     (608 ratings)
                    </div>
                  </div>
                 </div>
                </div>
              </div>
             </div>
            </div>
            <div className="inner-book__read--btn-wrapper">
             <button className="inner-book__read--btn">
             <div className="inner-book__read--icon">
                <FontAwesomeIcon icon="bookopen" />
             </div>
             <div className="inner-book__read--text">Read</div>
             </button>
            </div>
            <div className="inner-book__read--btn-wrapper">
             <button className="inner-book__read--btn">
             <div className="inner-book__read--icon">
                <FontAwesomeIcon icon="microphone" />
             </div>
             <div className="inner-book__read--text">Listen</div>
             </button>
            </div>
            <div className="inner-book__bookmark">
             <butt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;